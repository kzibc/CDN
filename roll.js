function roll() {
    let i, r, prompt, rollOut='', rollSum=0;
    const rollNickname=document.getElementById('rollNickname').value;
    const rollEvent=document.getElementById('rollEvent').value;
    let rollNum=document.getElementById('rollNum').value;
    let rollRange=document.getElementById('rollRange').value;
    if(rollNum===''){rollNum=1}else{rollNum=Number(rollNum)}
    if(rollRange===''){rollRange=100}else{rollRange=Number(rollRange)}
    if(rollNum===1)
    {
        r = Math.floor(Math.random() * rollRange) + 1;
        prompt = '「' + rollNickname + '」,「' + rollEvent + '」的结果：' + rollNum + ' d ' +
            rollRange + ' = ' + '「' + r + '」';
    }
    else {
        for (i = 0, rollOut = ''; i < rollNum; i++) {
            r = Math.floor(Math.random() * rollRange) + 1;
            rollOut += r + '+';
            rollSum += Number(r);
        }
        prompt = '「' + rollNickname + '」,「' + rollEvent + '」的结果：' + rollNum + ' d ' +
            rollRange + ' = ' + '「' + rollOut.slice(0, -1) + '」' +
            '=「' + rollSum +   '」';
    }
    reply_hd(prompt)
}


function reply_hd(content) {
    const tid = this.location.pathname;
    const tieid = tid.slice(-6);
    const Http = new XMLHttpRequest();
    const url = 'https://www.cpszd.com/api/create/reply/' + tieid;
    //const url = 'https://www.cpszd.com/api/create/reply/' + '627563';
    const id = '98950D68AB96FA07EA0DMBW7UVQS0GK3S4F7FB3EFFB61036F6D98A354DC38243d83f15945260245';
    const data = new FormData();
    data.append('username', 'Roll点系统');
    data.append('content', content);
    Http.open('POST', url);
    Http.setRequestHeader('userid', id);
    Http.setRequestHeader('api-user-tool', 'roll');
    Http.send(data);
}
