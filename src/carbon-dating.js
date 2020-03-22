const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  if (/[^[0-9.,]/.test(sampleActivity)) {
    return false;
  }
  let namb = parseFloat(sampleActivity);

  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  let t = (Math.log(MODERN_ACTIVITY / namb)) /0.693 * HALF_LIFE_PERIOD;
  return Math.ceil(t);
};
