function boundFuncTimer(obj, func, delay) {
  // Your code here
  setTimeout(() => func.call(obj), delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
