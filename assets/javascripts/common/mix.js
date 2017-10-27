/**
 * @function mix
 * @desc mix an object into another object
 * @param {object} options - Willy-nilly options you wanna have
 * @param {object} object - Object to mix willy-nilly options into
 */
const mix = (opts, obj) => {
  const options = opts || {};
  const object = obj;

  Object.keys(options).forEach((key) => {
    object[key] = options[key];
  });
};

export default mix;
