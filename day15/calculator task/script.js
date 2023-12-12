function getVal(data) {
    var getData = document.getElementById("result").value;
    getData += data;
    document.getElementById("result").value = getData;
  }
  function eq() {
    var getData = document.getElementById("result").value;
    document.getElementById("result").value = eval(getData);
  }
  
  function clr() {
    document.getElementById("result").value = "";
  }
  
  document.addEventListener("keyup", logKey);
  
  function logKey(e) {
    var keyCode = e.which;
    var keyVal = e.key;
    console.log(keyCode, keyVal);
    var acceptKey = [
      187, 107, 189, 109, 56, 106, 191, 111, 53, 110, 190, 187, 13,
    ];
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
      getVal(keyVal);
    } else if (acceptKey.includes(keyCode)) {
      if (keyCode == "187" || keyCode == "13") {
        eq();
      } else {
        getVal(keyVal);
      }
    } else if (keyCode == 8) {
      var getData = document.getElementById("result").value;
      document.getElementById("result").value = getData.slice(0, -1);
    } else {
      if (keyCode != 16) {
        alert("Only numbers are allowed");
      }
    }
  }
  