// ------------------------------------------------
// ----              STORAGE INFO              ----
// ------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const totalEl = document.createElement("h1");
  const freeEl = document.createElement("h1");
  const usedEl = document.createElement("h1");
  const error = document.createElement("p");

  var successCb = function (cbObject) {
    // Total internal memory size, in KB.
    totalEl.innerText =
      "Total: (Total internal memory size)  " + cbObject.total + " Kbytes";
    freeEl.innerText =
      "Free: (Free internal memory)  " + cbObject.free + " Kbytes";
    usedEl.innerText =
      "Used: (Total used memory)  " + cbObject.used + " Kbytes";
  };

  var failureCb = function (cbObject) {
    var errorCode = cbObject.errorCode;
    var errorText = cbObject.errorText;
    console.log(" Error Code [" + errorCode + "]: " + errorText);

    console.log(cbObject);
    error.innerText = errorText;
  };

  container.appendChild(totalEl);
  container.appendChild(freeEl);
  container.appendChild(usedEl);
  container.appendChild(error);

  // Create storage object and invoke the API..
  var storage = new Storage();
  storage.getStorageInfo(successCb, failureCb);
});
