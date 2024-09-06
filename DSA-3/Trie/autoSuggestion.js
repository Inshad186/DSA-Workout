
class Node{
    constructor(){
        this.child = {}
        this.isEnd    = false
    }
 }

 class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if (!node.child[char]) {
                node.child[char] = new Node()
            }
            node = node.child[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if (!node.child[char]) {
                return false                
            }
            node = node.child[char]
        }
        return node.isEnd;
    }

    prefixSearch(word){
        let node = this.root
        for(let char of word){
            if (!node.child[char]) {
                return false
            }
            node = node.child[char]
        }
        return true
    }

     // Auto-suggestion function: Get all words with the given prefix
    autoSuggest(word){
        let node = this.root
        for(let char of word){
            if (!node.child[char]) {
                return []; // If the prefix is not found, return an empty list
            }
            node = node.child[char]
        }
        return this.getWords(node,word)
    }

    getWords(node,word){
        let result = []
        if (node.isEnd) {
            result.push(word)
        }
        for(let char in node.child){
           result = result.concat(this.getWords(node.child[char],word + char)) 
        }
        return result
    }
 }

const trie = new Trie()

trie.insert("cheetah");
trie.insert("chee");
trie.insert("orange");
trie.insert("pappaya");
trie.insert("chai")
trie.insert("pineapple");

console.log(trie.autoSuggest('p'));