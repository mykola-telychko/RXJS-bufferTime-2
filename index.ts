import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertime
// Example 2: Multiple active buffers

//Create an observable that emits
const srcInterval$ = interval(500);
/*
bufferTime also takes second argument, when to start the next buffer (time in ms)
for instance, if we have a bufferTime of 2 seconds but second argument (bufferCreationInterval) of 1 second:
ex. output: [0,1,2]...[1,2,3,4,5]...[3,4,5,6,7]
*/
const example = srcInterval$.pipe(bufferTime(2000, 1000));
const subscribe = example.subscribe((val) =>
  console.log('Start Buffer Every 1s:', val)
);
