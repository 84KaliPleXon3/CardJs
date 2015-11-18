(function($) {

  var KEY_0 = 48;
  var KEY_9 = 57;
  var KEY_DELETE = 46;
  var KEY_BACKSPACE = 8;
  var KEY_ARROW_LEFT = 37;
  var KEY_ARROW_RIGHT = 39;
  var KEY_ARROW_UP = 38;
  var KEY_ARROW_DOWN = 40;
  var KEY_HOME = 36;
  var KEY_END = 35;
  var KEY_TAB = 9;
  var KEY_A = 65;
  var KEY_X = 88;
  var KEY_C = 67;
  var KEY_V = 86;



  var creditCardSvg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'x="0px" y="3px" width="24px" height="17px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve">' +
    '<g><path class="svg" d="M182.385,14.258c-2.553-2.553-5.621-3.829-9.205-3.829H42.821c-3.585,0-6.653,1.276-9.207,3.829' +
    'c-2.553,2.553-3.829,5.621-3.829,9.206v99.071c0,3.585,1.276,6.654,3.829,9.207c2.554,2.553,5.622,3.829,9.207,3.829H173.18' +
    'c3.584,0,6.652-1.276,9.205-3.829s3.83-5.622,3.83-9.207V23.464C186.215,19.879,184.938,16.811,182.385,14.258z M175.785,122.536' +
    'c0,0.707-0.258,1.317-0.773,1.834c-0.516,0.515-1.127,0.772-1.832,0.772H42.821c-0.706,0-1.317-0.258-1.833-0.773' +
    'c-0.516-0.518-0.774-1.127-0.774-1.834V73h135.571V122.536z M175.785,41.713H40.214v-18.25c0-0.706,0.257-1.316,0.774-1.833' +
    'c0.516-0.515,1.127-0.773,1.833-0.773H173.18c0.705,0,1.316,0.257,1.832,0.773c0.516,0.517,0.773,1.127,0.773,1.833V41.713z"/>' +
    '<rect class="svg" x="50.643" y="104.285" width="20.857" height="10.429"/>' +
    '<rect class="svg" x="81.929" y="104.285" width="31.286" height="10.429"/>'+
    '</g></svg>';


  var lockSvg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'x="0px" y="3px" width="24px" height="17px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve">' +
    '<path class="svg" d="M152.646,70.067c-1.521-1.521-3.367-2.281-5.541-2.281H144.5V52.142c0-9.994-3.585-18.575-10.754-25.745' +
    'c-7.17-7.17-15.751-10.755-25.746-10.755s-18.577,3.585-25.746,10.755C75.084,33.567,71.5,42.148,71.5,52.142v15.644' +
    'h-2.607c-2.172,0-4.019,0.76-5.54,2.281c-1.521,1.52-2.281,3.367-2.281,5.541v46.929c0,2.172,0.76,4.019,2.281,5.54' +
    'c1.521,1.52,3.368,2.281,5.54,2.281h78.214c2.174,0,4.02-0.76,5.541-2.281c1.52-1.521,2.281-3.368,2.281-5.54V75.607' +
    'C154.93,73.435,154.168,71.588,152.646,70.067z M128.857,67.786H87.143V52.142c0-5.757,2.037-10.673,6.111-14.746' +
    'c4.074-4.074,8.989-6.11,14.747-6.11s10.673,2.036,14.746,6.11c4.073,4.073,6.11,8.989,6.11,14.746V67.786z"/></svg>';


  var calendarSvg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve">' +
    '<path class="svg" d="M172.691,23.953c-2.062-2.064-4.508-3.096-7.332-3.096h-10.428v-7.822c0-3.584-1.277-6.653-3.83-9.206' +
    'c-2.554-2.553-5.621-3.83-9.207-3.83h-5.213c-3.586,0-6.654,1.277-9.207,3.83c-2.554,2.553-3.83,5.622-3.83,9.206' +
    'v7.822H92.359v-7.822c0-3.584-1.277-6.653-3.83-9.206c-2.553-2.553-5.622-3.83-9.207-3.83h-5.214c-3.585,0-6.654,' +
    '1.277-9.207,3.83c-2.553,2.553-3.83,5.622-3.83,9.206v7.822H50.643c-2.825,0-5.269,1.032-7.333,3.096s-3.096,' +
    '4.509-3.096,7.333v104.287c0,2.823,1.032,5.267,3.096,7.332c2.064,2.064,4.508,3.096,7.333,3.096h114.714c2.824,0,' +
    '5.27-1.032,7.332-3.096c2.064-2.064,3.096-4.509,3.096-7.332V31.286C175.785,28.461,174.754,26.017,172.691,23.953z ' +
    'M134.073,13.036c0-0.761,0.243-1.386,0.731-1.874c0.488-0.488,1.113-0.733,1.875-0.733h5.213c0.762,0,1.385,0.244,' +
    '1.875,0.733c0.488,0.489,0.732,1.114,0.732,1.874V36.5c0,0.761-0.244,1.385-0.732,1.874c-0.49,0.488-1.113,' +
    '0.733-1.875,0.733h-5.213c-0.762,0-1.387-0.244-1.875-0.733s-0.731-1.113-0.731-1.874V13.036z M71.501,13.036' +
    'c0-0.761,0.244-1.386,0.733-1.874c0.489-0.488,1.113-0.733,1.874-0.733h5.214c0.761,0,1.386,0.244,1.874,0.733' +
    'c0.488,0.489,0.733,1.114,0.733,1.874V36.5c0,0.761-0.244,1.386-0.733,1.874c-0.489,0.488-1.113,0.733-1.874,0.733' +
    'h-5.214c-0.761,0-1.386-0.244-1.874-0.733c-0.488-0.489-0.733-1.113-0.733-1.874V13.036z M165.357,135.572H50.643' +
    'V52.143h114.714V135.572z"/></svg>';


  var userSvg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve">' +
    '<g><path class="svg" d="M107.999,73c8.638,0,16.011-3.056,22.12-9.166c6.111-6.11,9.166-13.483,9.166-22.12c0-' +
    '8.636-3.055-16.009-9.166-22.12c-6.11-6.11-13.484-9.165-22.12-9.165c-8.636,0-16.01,3.055-22.12,9.165c-6.111,' +
    '6.111-9.166,13.484-9.166,22.12c0,8.637,3.055,16.01,9.166,22.12C91.99,69.944,99.363,73,107.999,73z"/>' +
    '<path class="svg" d="M165.07,106.037c-0.191-2.743-0.571-5.703-1.141-8.881c-0.57-3.178-1.291-6.124-2.16-8.84' +
    'c-0.869-2.715-2.037-5.363-3.504-7.943c-1.466-2.58-3.15-4.78-5.052-6.6s-4.223-3.272-6.965-4.358c-2.744-1.086' +
    '-5.772-1.63-9.085-1.63c-0.489,0-1.63,0.584-3.422,1.752s-3.815,2.472-6.069,3.911c-2.254,1.438-5.188,2.743-8.' +
    '799,3.909c-3.612,1.168-7.237,1.752-10.877,1.752c-3.639,0-7.264-0.584-10.876-1.752c-3.611-1.166-6.545-2.471-' +
    '8.799-3.909c-2.254-1.439-4.277-2.743-6.069-3.911c-1.793-1.168-2.933-1.752-3.422-1.752c-3.313,0-6.341,0.544-' +
    '9.084,1.63s-5.065,2.539-6.966,4.358c-1.901,1.82-3.585,4.02-5.051,6.6s-2.634,5.229-3.503,7.943c-0.869,2.716-' +
    '1.589,5.662-2.159,8.84c-0.571,3.178-0.951,6.137-1.141,8.881c-0.19,2.744-0.285,5.554-0.285,8.433c0,6.517,1.9' +
    '83,11.664,5.948,15.439c3.965,3.774,9.234,5.661,15.806,5.661h71.208c6.572,0,11.84-1.887,15.806-5.661c3.966-3' +
    '.775,5.948-8.921,5.948-15.439C165.357,111.591,165.262,108.78,165.07,106.037z"/></g></svg>';


  var settings;

  var displayElement;

  var cardNumberInput;
  var nameInput;
  var expiryMonthInput;
  var expiryYearInput;
  var cvcInput;


  var methods = {
    init : function(options) {

      settings = $.extend({

        captureName: true,

        creditCardNumberMask: "XXXX XXXX XXXX XXXX",
        creditCardNumberPlaceholder: "Card number",

        namePlaceholder: "Name on card",

        expiryUseDropDowns: true,
        expiryNumberOfYears: 10,

        cvcMask: "XXXX",
        cvcPlaceholder: "CVC"

      }, options);


      displayElement = this;

      // --- --- --- --- --- --- --- --- --- ---

      // Initialise
      initCardNumberInput();
      initNameInput();
      initExpiryMonthInput();
      initExpiryYearInput();
      initCvcInput();


      this.empty();


      // Setup display
      setupCardNumberInput();
      setupNameInput();
      setupExpiryInput();
      setupCvcInput();

      // --- --- --- --- --- --- --- --- --- ---

      refreshCreditCardTypeIcon();

      return this;
    }
  };


  /**
   * jQuery function.
   *
   * @param methodOrOptions
   * @returns {*}
   */
  $.fn.CardJs = function(methodOrOptions) {

    if(methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof methodOrOptions === "object" || !methodOrOptions) {
      return methods.init.apply( this, arguments );
    } else {
      $.error("Method " +  methodOrOptions + " does not exist on jQuery.CardJs");
    }
  };



  function copyAllElementAttributes(source, destination) {
    $.each(source[0].attributes, function(idx, attr) {
      destination.attr(attr.nodeName, attr.nodeValue);
    });
  }






  function initCardNumberInput() {
    cardNumberInput = displayElement.find(".card-number");
    cardNumberInput.detach();

    cardNumberInput.attr("type", "tel");
    if(!cardNumberInput.attr("placeholder")) { cardNumberInput.attr("placeholder", settings.creditCardNumberPlaceholder) }
    cardNumberInput.attr("maxlength", settings.creditCardNumberMask.length);
    cardNumberInput.attr("x-autocompletetype", "cc-number");
    cardNumberInput.attr("autocompletetype", "cc-number");
    cardNumberInput.attr("autocorrect", "off");
    cardNumberInput.attr("spellcheck", "off");
    cardNumberInput.attr("autocapitalize", "off");

    cardNumberInput.keydown(handleCreditCardNumberKey);
    cardNumberInput.keyup(refreshCreditCardTypeIcon);
    cardNumberInput.change(handleCreditCardNumberChange);
  }


  function initNameInput() {
    nameInput = displayElement.find(".name");
    if(nameInput[0]) {
      nameInput.detach();
    } else {
      nameInput = $("<input class='name' />");
    }

    if(!nameInput.attr("placeholder")) { nameInput.attr("placeholder", settings.namePlaceholder) }
  }


  function initExpiryMonthInput() {
    expiryMonthInput = displayElement.find(".expiry-month");
    if(expiryMonthInput) {
      expiryMonthInput.detach();
    }
  }


  function initExpiryYearInput() {
    expiryYearInput = displayElement.find(".expiry-year");
    if(expiryYearInput) {
      expiryYearInput.detach();
    }
  }


  function initCvcInput() {
    cvcInput = displayElement.find(".cvc");
    if(cvcInput) {
      cvcInput.detach();
    }

    cvcInput.attr("type", "tel");
    if(!cvcInput.attr("placeholder")) { cvcInput.attr("placeholder", settings.cvcPlaceholder) }
    cvcInput.attr("maxlength", settings.cvcMask.length);
    cvcInput.attr("x-autocompletetype", "cc-csc");
    cvcInput.attr("autocompletetype", "cc-csc");
    cvcInput.attr("autocorrect", "off");
    cvcInput.attr("spellcheck", "off");
    cvcInput.attr("autocapitalize", "off");

    cvcInput.keydown(handleNumberOnlyKey);
  }






  function setupCardNumberInput() {
    displayElement.append("<div class='card-number-wrapper'></div>");
    var wrapper = displayElement.find(".card-number-wrapper");
    wrapper.append(cardNumberInput);
    wrapper.append("<div class='card-type-icon'></div>");
    wrapper.append("<div class='icon'></div>");
    wrapper.find(".icon").append(creditCardSvg);
  }


  function setupNameInput() {
    if(settings.captureName) {
      displayElement.append("<div class='name-wrapper'></div>");
      var wrapper = displayElement.find(".name-wrapper");
      wrapper.append(nameInput);
      wrapper.append("<div class='icon'></div>");
      wrapper.find(".icon").append(userSvg);
    }
  }



  function setupExpiryInput() {
    displayElement.append("<div class='expiry-wrapper'></div>");
    var wrapper = displayElement.find(".expiry-wrapper");

    if(settings.expiryUseDropDowns) {
      var expiryMonthNew = $(
        "<select>" +
        "<option value='any' selected='' hidden=''>MM</option>" +
        "<option value='1'>01</option>" +
        "<option value='2'>02</option>" +
        "<option value='3'>03</option>" +
        "<option value='4'>04</option>" +
        "<option value='5'>05</option>" +
        "<option value='6'>06</option>" +
        "<option value='7'>07</option>" +
        "<option value='8'>08</option>" +
        "<option value='9'>09</option>" +
        "<option value='10'>10</option>" +
        "<option value='11'>11</option>" +
        "<option value='12'>12</option>" +
        "</select>"
      );
      var expiryMonthOld = expiryMonthInput;
      copyAllElementAttributes(expiryMonthOld, expiryMonthNew);
      expiryMonthInput.remove();
      expiryMonthInput = expiryMonthNew;

      var expiryYearNew = $("<select><option value='any' selected='' hidden=''>YY</option></select>");
      var currentYear = parseInt(((new Date().getFullYear()).toString()).substring(2, 4));
      for(var i = 0; i < settings.expiryNumberOfYears; i++) {
        expiryYearNew.append("<option value='" + currentYear + "'>" + currentYear + "</option>");
        currentYear = (currentYear + 1) % 100;
      }
      var expiryYearOld = expiryYearInput;
      copyAllElementAttributes(expiryYearOld, expiryYearNew);
      expiryYearInput.remove();
      expiryYearInput = expiryYearNew;
    }


    wrapper.append(expiryMonthInput);
    wrapper.append(expiryYearInput);
  }


  function setupCvcInput() {
    displayElement.append("<div class='cvc-wrapper'></div>");
    var wrapper = displayElement.find(".cvc-wrapper");
    wrapper.append(cvcInput);
    wrapper.append("<div class='icon'></div>");
    wrapper.find(".icon").append(userSvg);
  }










  function clearCardTypeIcon() {
    displayElement.find(".card-number-wrapper .card-type-icon").removeClass("show");
  }

  function setCardTypeIconAsVisa() {
    var cardTypeIcon = displayElement.find(".card-number-wrapper .card-type-icon");
    cardTypeIcon.attr("class", "card-type-icon show visa");
  }

  function setCardTypeIconAsMasterCard() {
    var cardTypeIcon = displayElement.find(".card-number-wrapper .card-type-icon");
    cardTypeIcon.attr("class", "card-type-icon show master-card");
  }

  function setCardTypeIconAsAmericanExpress() {
    var cardTypeIcon = displayElement.find(".card-number-wrapper .card-type-icon");
    cardTypeIcon.attr("class", "card-type-icon show american-express");
  }

  function setCardTypeIconAsDiscover() {
    var cardTypeIcon = displayElement.find(".card-number-wrapper .card-type-icon");
    cardTypeIcon.attr("class", "card-type-icon show discover");
  }

  function setCardTypeIconAsDiners() {
    var cardTypeIcon = displayElement.find(".card-number-wrapper .card-type-icon");
    cardTypeIcon.attr("class", "card-type-icon show diners");
  }

  function setCardTypeIconAsJcb() {
    var cardTypeIcon = displayElement.find(".card-number-wrapper .card-type-icon");
    cardTypeIcon.attr("class", "card-type-icon show jcb");
  }







  function handleNumberOnlyKey(e) {
    var keyCode = e.which || e.keyCode;

    var isNumber = keyCode >= KEY_0 && keyCode <= KEY_9;
    var isDeletion = keyCode == KEY_BACKSPACE || keyCode == KEY_DELETE;
    var isArrow = keyCode >= KEY_ARROW_LEFT && keyCode <= KEY_ARROW_DOWN;
    var isNavigation = keyCode == KEY_HOME || keyCode == KEY_END;
    var isKeyboardCommand = e.ctrlKey && (keyCode == KEY_A || keyCode == KEY_X || keyCode == KEY_C || keyCode == KEY_V);
    var isTab = keyCode == KEY_TAB;

    if(!isNumber && !isDeletion && !isArrow && !isNavigation && !isKeyboardCommand && !isTab) {
      e.preventDefault();
    }
  }


  /**
   * Strip all characters that are not in the range 0-9
   *
   * @param string
   * @returns {string}
   */
  function numbersOnlyString(string) {
    var numbersOnlyString = "";
    for(var i = 0; i < string.length; i++) {
      var currentChar = string.charAt(i);
      var isValid = !isNaN(parseInt(currentChar));
      if(isValid) { numbersOnlyString += currentChar; }
    }
    return numbersOnlyString;
  }


  /**
   * Apply a format mask to the given string
   *
   * @param string
   * @param mask
   * @returns {string}
   */
  function applyFormatMask(string, mask) {
    var formattedString = "";
    var numberPos = 0;
    for(var j = 0; j < mask.length; j++) {
      var currentMaskChar = mask[j];
      if(currentMaskChar == "X") {
        formattedString += string.charAt(numberPos);
        numberPos++;
      } else {
        formattedString += currentMaskChar;
      }
      if(numberPos >= string.length) { break; }
    }
    return formattedString;
  }



  function refreshCreditCardTypeIcon() {
    setCardTypeIconFromNumber(numbersOnlyString(cardNumberInput.val()));
  }



  function handleCreditCardNumberKey(e) {
    handleNumberOnlyKey(e);
    var keyCode = e.which || e.keyCode;
    var char = String.fromCharCode(keyCode);


    // Handle Number
    if(!isNaN(parseInt(char))) {
      e.preventDefault();
      var numbersOnly = numbersOnlyString(cardNumberInput.val()) + char;
      var formatted = applyFormatMask(numbersOnly, settings.creditCardNumberMask);
      $(e.target).val(formatted);
    }

    // Handle Backspace
    //if(keyCode == KEY_BACKSPACE)
  }



  function handleCreditCardNumberChange(e) {
    //cardNumberInput.val(formatCreditCardNumber(cardNumberInput.val()));
  }








  /**
   *
   *
   * @param number
   * @returns {string}
   */
  function cardTypeFromNumber(number) {

    // Visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
      return "Visa";

    // Mastercard
    re = new RegExp("^5[1-5]");
    if (number.match(re) != null)
      return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
      return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
      return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
      return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
      return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
      return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
      return "Visa Electron";

    return "";
  }


  /**
   * Update the display to set the card type from the current number.
   *
   * @param number
   */
  function setCardTypeIconFromNumber(number) {
    switch(cardTypeFromNumber(number)) {
      case "Visa Electron":
      case "Visa":
        setCardTypeIconAsVisa();
        break;
      case "Mastercard":
        setCardTypeIconAsMasterCard();
        break;
      case "AMEX":
        setCardTypeIconAsAmericanExpress();
        break;
      case "Discover":
        setCardTypeIconAsDiscover();
        break;
      case "Diners - Carte Blanche":
      case "Diners":
        setCardTypeIconAsDiners();
        break;
      case "JCB":
        setCardTypeIconAsJcb();
        break;
      default:
        clearCardTypeIcon();
    }
  }




}(jQuery));


//
// Initialise for all elements with cardjs class.
//
$(function() {
  $(".cardjs").CardJs();
});
