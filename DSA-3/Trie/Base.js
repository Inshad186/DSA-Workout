//////////////!   Trie-Implementation   //////////////!

class TrieNode {
    constructor() {
        this.children = {}; 
        this.isEndOfWord = false; 
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {                
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;  
    }
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;  
    }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); 
console.log(trie.search("world"));  
console.log(trie.search("hell"));   
