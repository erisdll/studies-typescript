import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1 / 3, 33, 50000, 10]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numSorter.collection);

const charactersCollection = new CharacterCollection('abcdefghijklmnopqrstuvwxyz');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charSorter.collection);

const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(5)
linkedList.add(4)
console.log(linkedList);