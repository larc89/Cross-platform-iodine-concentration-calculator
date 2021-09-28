// Update conversion factor whenever one of the selected
// input variables changes.
$( ".platform .dropdown-item" ).click(function() {
    $(".platform .selected").removeClass("selected");
    $(this).addClass("selected");
    $(".platform .dropdown-toggle").text($(".platform .selected").text());
    const platform = $(".platform .selected").text();
    const phase = $(".phase .selected").text();
    const exposure = $(".exposure .selected").text();
    if (platform && phase && exposure) {
        const conversionFactor = getConversionFactor(platform, phase, exposure);
        $( ".conversion-factor span" ).text(`${conversionFactor}`);
    }
});
$( ".phase .dropdown-item" ).click(function() {
    $(".phase .selected").removeClass("selected");
    $(this).addClass("selected");
    $(".phase .dropdown-toggle").text($(".phase .selected").text());
    const platform = $(".platform .selected").text();
    const phase = $(".phase .selected").text();
    const exposure = $(".exposure .selected").text();
    if (platform && phase && exposure) {
        const conversionFactor = getConversionFactor(platform, phase, exposure);
        $( ".conversion-factor span" ).text(`${conversionFactor}`);
    }
});
$( ".exposure .dropdown-item" ).click(function() {
    $(".exposure .selected").removeClass("selected");
    $(this).addClass("selected");
    $(".exposure .dropdown-toggle").text($(".exposure .selected").text());
    const platform = $(".platform .selected").text();
    const phase = $(".phase .selected").text();
    const exposure = $(".exposure .selected").text();
    if (platform && phase && exposure) {
        const conversionFactor = getConversionFactor(platform, phase, exposure);
        $( ".conversion-factor span" ).text(`${conversionFactor}`);
    }
});
$( ".pb-ic input" ).change(function() {
    const pbIc = $(".pb-ic input").val();
    if (isValidPbIc(pbIc)) {
        $(".pb-ic .error").text("");
    } else {
        $(".pb-ic .error").text("This model has not been validated for a pb-IC under 0.1 or over 3 mgI/mL");
    }
});
$( ".calculate" ).click(function() {
    const conversionFactorText = $(".conversion-factor span").text();
    const conversionFactor = parseFloat(conversionFactorText, 10);
    const pbIc = $(".pb-ic input").val();
    if (conversionFactor && isValidPbIc(pbIc)) {
        const cpIc = conversionFactor * pbIc;
        $( ".cp-ic span" ).text(`${cpIc.toFixed(3)} mgi/mL`);
    }
});
