const getConversionFactor = function(platform, phase, exposure) {
    return CONVERSION_FACTORS[platform][exposure][phase];
}

const isValidPbIc = function(pbIc) {
    return pbIc >= 0.1 && pbIc <= 3;
}
