class Node{
    constructor(){
        this.children = {};
        this.end = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(words){
        for(let i=0;i<words.length;i++){
            let curr = this.root;
            let word = words[i];
            for(let i=0;i<word.length;i++){
                let char = word[i];
                if(!(char in curr.children)){
                    curr.children[char] = new Node();
                }curr = curr.children[char];
            }curr.end = true;
        }
    }
    find(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let char = word[i];
            if(!(char in curr.children)){
                return false;
            }curr = curr.children[char];
        }return curr.end;
    }
    dfs(temp,curr,str){
        if(!curr){
            return;
        }if(curr.end){
            temp.push(str);
        }for(let i='a';i<='z';i++){
            let char = curr.children[i];
            if(char){
                str.push(i);
                this.dfs(temp,char,str);
                str.pop();
            }
        }
    }
    prefix(word){
        let str = [];
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let char = word[i];
            str.push(char);
            if(!(char in curr.children)){
                return [];
            }curr = curr.children[char];
        }
        let temp = [];
        this.dfs(temp,curr,str);
        return temp;
    }
}
const access = new Trie;
access.insert(['manoj','man','good']);
console.log(access.find('good'));
console.log(access.prefix('ma'));