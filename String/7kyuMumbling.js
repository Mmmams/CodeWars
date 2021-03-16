function accum(s) {
	a = s.toLowerCase().split('');
    newArr = [];
    for(let i = 0; i<a.length; i++){
        j = i + 1;
        a[i] = a[i].repeat(j);
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
     
    }

    s = a.join('-')
    return(s);
}

accum('ABC')