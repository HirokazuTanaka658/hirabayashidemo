function CheckInput(){
  var Error_Msg = "";
  var td = document.getElementsByClassName('td_02');
  var flg1 = 0;
  var flg2 = 0;
  if ( !document.getElementById("INQUIRYITEMS1").checked && !document.getElementById("INQUIRYITEMS2").checked && !document.getElementById("INQUIRYITEMS3").checked && !document.getElementById("INQUIRYITEMS4").checked ) {
    Error_Msg = Error_Msg +  "お問合せ項目\n";
  }

  if (document.getElementById("NAME").value == "") {
    Error_Msg = Error_Msg +  "お名前\n";
  }

  if (document.getElementById("MAIL").value == "") {
    Error_Msg = Error_Msg +  "E-mail\n";
    var flg1 = 1;
  }

  if (document.getElementById("MAIL2").value == "") {
    Error_Msg = Error_Msg +  "E-mail（確認）\n";
    var flg2 = 2;
  }

  if (!document.getElementById("AGREE").checked) {
    Error_Msg = Error_Msg +  "個人情報について\n";
  }
  if (Error_Msg.indexOf('お問合せ項目') != -1 && document.getElementById('pinquiry') == null){
  	var p1 = document.createElement('p');
  	p1.setAttribute('class','red');
  	p1.id = 'pinquiry'
    td[0].appendChild(p1);
    var inquiry = document.createTextNode('＊お問い合わせ項目を選んでください');
  	var Pinquiry = document.getElementById('pinquiry');
    Pinquiry.appendChild(inquiry);
  }else if(Error_Msg.indexOf('お問合せ項目') == -1 && document.getElementById('pinquiry') != null) {
  	var Pinquiry = document.getElementById('pinquiry');
  	pinquiry.parentNode.removeChild(pinquiry);
  }
  
  if(Error_Msg.indexOf('お名前') != -1 && document.getElementById('pname') == null) {
  	var p2 = document.createElement('p');
  	p2.setAttribute('class','red');
  	p2.id = 'pname'
  	td[1].appendChild(p2);
  	var name = document.createTextNode('＊お名前を入力してください');
  	var pname = document.getElementById('pname');
  	pname.appendChild(name);
  }else if(Error_Msg.indexOf('お名前') == -1 && document.getElementById('pname') != null){
  	var pname = document.getElementById('pname');
  	pname.parentNode.removeChild(pname);
  }
  
  if(flg1 == 1 && document.getElementById('pmail') == null){
  	var p3 = document.createElement('p');
  	p3.setAttribute('class','red');
  	p3.id = 'pmail';
  	td[8].appendChild(p3);
  	var mail = document.createTextNode('＊E-mailを入力してください');
  	var pmail = document.getElementById('pmail');
  	pmail.appendChild(mail);
  }else if(flg1 == 0 && document.getElementById('pmail') != null){
  	var pmail = document.getElementById('pmail');
  	pmail.parentNode.removeChild(pmail);
  }
  
  if(flg2 == 2 && document.getElementById('pmail2') == null){
  	var p4 = document.createElement('p');
  	p4.setAttribute('class','red');
  	p4.id = 'pmail2';
  	td[9].appendChild(p4);
  	var mail2 = document.createTextNode('＊E-mail(確認)を入力してください');
  	var pmail2 = document.getElementById('pmail2');
  	pmail2.appendChild(mail2);
  }else if(flg2 == 0 && document.getElementById('pmail2') != null){
  	var pmail2 = document.getElementById('pmail2');
  	pmail2.parentNode.removeChild(pmail2);
  }
  
  if(Error_Msg.indexOf('個人情報について') != -1 && document.getElementById('pprivacy') == null) {
  	var p5 = document.createElement('p');
  	p5.setAttribute('class','red');
  	p5.id = 'pprivacy'
  	td[11].appendChild(p5);
  	var privacy = document.createTextNode('＊同意するにチェックが入っていません');
  	var pprivacy = document.getElementById('pprivacy');
  	pprivacy.appendChild(privacy);
  }else if(Error_Msg.indexOf('個人情報について') == -1 && document.getElementById('pprivacy') != null){
  	var pprivacy = document.getElementById('pprivacy');
  	pprivacy.parentNode.removeChild(pprivacy);
  }
  
  if ((Error_Msg) != "") {
    alert("次の項目は必ず入力または選択してください。\n\n" + Error_Msg + "\n");
    return false;
  }
}