import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1 / 3, 33, 50000, 10]);
numbersCollection.sort();

const charactersCollection = new CharacterCollection(
  'abcdefghijklmnopqrstuvwxyz'
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(200);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(13);
linkedList.sort();
linkedList.print();
