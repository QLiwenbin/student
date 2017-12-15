$(function () {


    // 删除
    let tbody  = document.querySelector('tbody')
    console.log(tbody)
   tbody.ondblclick = function (e) {
       let obj = e.target;
       console.log(obj);
       var parpar = obj.parentNode.parentNode;
       if (obj.className == 'del'){
           tbody.removeChild(parpar);
       }else if (obj.tagName=='TD'&& obj.children.length == 0) {
       let input = document.createElement('input');
       input.style.width = 130 + 'px';
       input.style.margin= '0 auto';
       let val = obj.innerHTML;
       obj.innerHTML = '';
       input.value = val;
       obj.appendChild(input);
       input.focus();
           input.onblur = function () {
               let newvalue = input.value;
               obj.innerHTML = newvalue;
           }
       }
   }

   // ******************添加************************
    let add = document.querySelector('#add');
       add.onclick = function () {
           let tr = document.createElement('tr');
           tr.innerHTML = `
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td><div class="del">删除</div></td>
           `
           tbody.appendChild(tr);
       };
})