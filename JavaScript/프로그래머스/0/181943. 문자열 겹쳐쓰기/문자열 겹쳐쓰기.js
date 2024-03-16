function solution(my_string, overwrite_string, s) {
    let answer = '';
    //const temp = my_string.substring(s, (overwrite_string.length + s));
    //answer = my_string.replace(temp, overwrite_string);
    const arr = [...my_string];
    arr.splice(s, overwrite_string.length, overwrite_string);
    answer = arr.join("");
    return answer;
}