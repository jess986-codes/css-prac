let bill = $(".bill").val();
let tip = $(".tip--custom").val();
let people = $(".people").val();

$(".bill").on("keyup", function () {
  bill = $(".bill").val();
  calculateTip();
});

$(".tip--custom").on("keyup", function () {
  tip = $(".tip--custom").val();
  $("button").removeClass("selected");
  calculateTip();
});

$(".people").on("keyup", function () {
  people = $(".people").val();
  calculateTip();
});

$(".reset").click(function () {
  bill = $(".bill").val("");
  tip = $(".tip--custom").val("");
  people = $(".people").val("");
  $(".result").text("$0.00");
});

$("button").click(function () {
  $("button").removeClass("selected");
  $(this).addClass("selected");
  $(".tip--custom").val("");
  tip = $(this).text();
  calculateTip();
});

function calculateTip() {
  billFloat = parseFloat(bill);
  tipFloat = parseFloat(tip) / 100;
  peopleInt = parseInt(people);

  if (!isNaN(peopleInt) && peopleInt !== 0) {
    $(".validation-error").hide();
    $(".people").removeClass("error-input");

    tipAmount = billFloat * tipFloat;
    tipPp = tipAmount / peopleInt;

    billTotal = billFloat + tipAmount;
    billPp = billTotal / peopleInt;

    tipResult = !isNaN(tipPp) ? String(tipPp.toFixed(2)) : "0.00";
    billResult = !isNaN(billPp) ? String(billPp.toFixed(2)) : "0.00";

    $(".tip-result").text(`$${tipResult}`);
    $(".bill-result").text(`$${billResult}`);
  }

  if (peopleInt === 0) {
    $(".validation-error").show();
    $(".people").addClass("error-input");
  }
}
