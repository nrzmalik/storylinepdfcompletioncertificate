function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QmjDr3eTRK":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
confettiScript.async = true;
confettiScript.onload = function() {
    generateCertificate();
};
document.head.appendChild(confettiScript);

function generateCertificate() {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;

    var name = prompt("Please enter your name:", "");
    if (!name) {
         name = prompt("Please enter your name:", "");
    }
    var doc = new jsPDF({
        orientation: 'landscape'
    });

    var pageWidth = doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.getHeight();

    doc.setLineWidth(2);
    doc.setDrawColor(182, 0, 0);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    var gradient = doc.setFillColor(182, 0, 0);
    doc.rect(10, 10, pageWidth - 20, 40, 'F');

    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(1);
    doc.line(10, 40, pageWidth - 10, 40);
    doc.line(30, 10, 30, 40);
    doc.line(pageWidth - 30, 10, pageWidth - 30, 40);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(30);
    doc.setFont('Helvetica', 'bold');
    var title0 = "Certificate of Completion";

    var pageWidth = doc.internal.pageSize.getWidth();
    var nameWidth = doc.getStringUnitWidth(title0) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var xPos = (pageWidth - nameWidth) / 2;
    doc.text(title0, xPos, 30, null, null, 'left');

    doc.setTextColor(0, 0, 0);

    doc.setFontSize(28); 
    doc.setFont('Helvetica','normal');
    var title2 = "THIS IS TO CERTIFY THAT";
    var pageWidth = doc.internal.pageSize.getWidth();
    var nameWidth = doc.getStringUnitWidth(title2) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var xPos = (pageWidth - nameWidth) / 2;
    doc.text(title2, xPos, 70, null, null, 'left');

    doc.setFontSize(50); 
    doc.setFont('Helvetica','bold');
    var pageWidth = doc.internal.pageSize.getWidth();
    var nameWidth = doc.getStringUnitWidth(name) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var xPos = (pageWidth - nameWidth) / 2;
    doc.text(name, xPos, 100, null, null, 'left');

    doc.setFont('Helvetica','normal');
    doc.setFontSize(28); 
    var title3 = "You have successfully completed:";
    var pageWidth = doc.internal.pageSize.getWidth();
    var nameWidth = doc.getStringUnitWidth(title3) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var xPos = (pageWidth - nameWidth) / 2;
    doc.text(title3, xPos, 140, null, null, 'left');

    var pageTitle = document.title;
    doc.setFontSize(24); 
    doc.setFont('Helvetica','bold');
    var pageWidth = doc.internal.pageSize.getWidth();
    var nameWidth = doc.getStringUnitWidth(pageTitle) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var xPos = (pageWidth - nameWidth) / 2;
    doc.text(pageTitle, xPos, 160, null, null, 'left');

    doc.setDrawColor(0, 0, 0); 
    doc.setLineWidth(0.5);
    doc.line(18, 190, 43, 190);

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(date, 18, 188, null, null, 'left');
    doc.text("Date", 25, 195, null, null, 'left');

    doc.save(name + " Certificate.pdf");
}

}

};
