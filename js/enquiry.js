
function validate() {
    if (document.getElementById("txtName").value.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ').length == 0) {
        document.getElementById("txtName").focus();
        alert("Kindly Fill Name");
        return false;
    }
    else if (document.getElementById("txtEmail").value.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ').length > 0) {
        var emailPat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var emailid = document.getElementById("txtEmail").value;
        var matchArray = emailid.match(emailPat);
        if (matchArray == null) {

            alert("Email Address is not in Correct Formate");
            document.getElementById("txtEmail").focus();
            return false;

        }
    }
    else {
        alert("Kindly Fill Email.");
        return false;
    }
    if (document.getElementById("txtAddress").value.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ').length == 0) {
        document.getElementById("txtAddress").focus();
        alert("Kindly Fill Address");
        return false;
    }
    if (document.getElementById("txtYers").value.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ').length == 0) {
        document.getElementById("txtYers").focus();
        alert("Kindly Fill Year with Us.");
        return false;
    }
    if (document.getElementById("txtProfessional").value.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ').length == 0) {
        document.getElementById("txtProfessional").focus();
        alert("Kindly Fill Current Professional Status .");
        return false;
    }

}
//---------General Enquery End----------//
function numbersonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode >= 48 && unicode <= 57) {
        return true;
    }
    else {
        if (unicode == 8 || unicode == 9 || unicode == 40 || unicode == 41 || unicode == 45 || unicode == 44 || unicode == 43 || unicode == 32 || unicode == 107) {
            return true;
        } else {
            alert("Kindly Enter only Numeric Value");
            return false;

        }

    }
}
function textCounter(field, counter, maxlimit, linecounter) {
    // text width//
   // var fieldWidth = parseInt(field.offsetWidth);
    //var charcnt = field.value.length;

    // trim the extra text
//    if (charcnt > maxlimit) {
//        field.value = field.value.substring(0, maxlimit);
//    }

//    else {
//        // progress bar percentage
 //      var percentage = parseInt(100 - ((maxlimit - charcnt) * 100) / maxlimit);
//        //document.getElementById(counter).style.width = parseInt((fieldWidth * percentage) / 100) + "px";
//        document.getElementById(counter).innerHTML = "Limit: " + percentage + "%"
//        // color correction on style from CCFFF -> CC0000
//        setcolor(document.getElementById(counter), percentage, "background-color");
//    }
}

function setcolor(obj, percentage, prop) {
    obj.style[prop] = "rgb(80%," + (100 - percentage) + "%," + (100 - percentage) + "%)";
}