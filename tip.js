/*

An Exhaustive List of Topics You'll Need To Know Well
Fundamentals of Computers (just a general knowing how computers store information etc.)

This is just a basal thing. Knowing how binary works, how memory is managed in a program (stack & heap), etc.

Big O Time & Space Complexity Computation

Know asymptotic bounds. If you can be flexible in how you analyze a solution you come up with (lower bounding it, upper bounding, exact bounding) it can help you see whether you can do better and make an improved algorithm

- Arrays

This is pretty straightforward. Often questions that work within arrays will be solved in linear time ( O(n) ) for the most part and that linear time solution will be tricky.

- Primitives

Things like bit shifting. This is more rare and I don't think this is as important since it doesn't test real thinking abilities since it mixes with one's abilities to bit shift which is an esoteric skill.

- Strings

These are problems that often deal with strings like permutations, backtracking problems that have use take an exhaustive approach in producing decompositions of a string to search a possibility space (which is often a brute force way of solving a problem since it will be exponential in time), etc etc. String problems are often solved most optimally in O(n) time or O(s1 + s2) time (linear with respect to each string) if we are given 2 strings...whatever the problem may be.

- Dynamic Programming

One of the most difficult subjects. This is the key: subproblems. If you can identify the subproblem, you have cracked the problem. Because from there it is all about memoization to cache and leverage previous solutions.

- Recursion / Backtracking

This is a comfort thing. The more of these you do, the better you get. At some point you will naturally think of solutions in a recursive manner (if backtracking could be a possible approach used). Problems that use backtracking often say..."generate all"..."compute every"....this indicates an expression of exhaustively expressing all the possibilities of a decision space. Recursion is beautiful for this.

- Graphs

Know DFS & BFS. DFS uses a stack (either implicit with the call stack and recursion or explicit if we create our own stack) & BFS uses a queue.

- Greedy Algorithms

These are algorithms that take the locally most optimal solution to achieve a global optimal. In contrast to problems that use dynamic programming (which is characterized by caching previous subproblems to find a global optimum), greedy algorithms take locally optimal choices.

Not all greedy approaches one comes up with will work 100% of the time so it hinges on being able to use deductive logic to prove that a given approach will always work

- Hashtables

Very very very common in mid-level interviews. This is a must know. It is pretty simple, when our time complexity is too high, we can often reduce time and increase space by using some sort of auxiliary structure to cache work. Hashtables are often that auxiliary structure.

- Linked Lists

A tricky structure to work with. It is hard because we can't index into items. It gets easier with time but always remain tricky.

- Sorting

Know the fundamental sorting algorithms. Bubble, Insertion, Selection, Merge, Quick, Heap, ...etc

- Searching

If an array is sorted. IMMEDIATELY know that that is a strong hint that the optimal solution will use binary search and stay to the order of O(log(n))

- Min/Max Heaps

Heaps are really cool. Just know...if you see "find the LARGEST"...or ... "find the SMALLEST"...anything to do with size...think heap. Min or max. If we want larger items we use a min heap since we can throw away small items (to leave the large ones behind). And vice versa for when we want the smaller items

- Stacks

LIFO structures. Know how to implement a stack inside out. it is fairly easy so don't fear it. I'd suggest knowing how to implement all data structures stated here. Why not?

- Queues

FIFO structures. Used for Breadth First Search.

- Trees, Binary Trees, & Binary Search Trees

Trees are connected, acyclic, graphs. You can do DFS and BFS on them. Print all the characters in the tree in this order? Does it look like DFS? You can do that. Traverse the tree level by level? Looks like BFS. (BFS goes out level by level).

- System and OO design Principles (sometimes)

Some compaines ask Object Oriented questions. A great great resource for this is the book "Clean Architecture" by Robert C. Martin. I also highly recommend his book "Clean Code" but it won't help you for interviews (but will make you a better programmer)



An Approach To Preparation
Find your weak topics. For me those were trees, backtracking, dynamic programming, and linked lists.

Start with easys. My first Leetcode problem was Jewels & Stones (you can search it) and it took me 30 minutes......it was just 2 for loops. Am I dumb? ... maybe ... but these problems are so far divorced from daily programming tasks that it was difficult for me.

Easys will be very difficult when you just start...then they will start getting...easy...hmmmm...onto the mediums.

Your summer internship interviews will be medium difficulty questions. Full-time roles will be upper medium questions sprinkled with a few hard questions. Stay rooted in the fundamentals above and you can survive.

Go onto hards if you want...but don't get lost on esoteric problems that require "special" tricks. This is all about getting ready to pass an interview for a job, not so much to have bragging rights.

Top it all off with polishing your delivery. pramp.com interviews helped me immensely. I did about 8 in person interviews this past season.






F.A.Q.
How many Leetcode until I'm ready?

There is no finite amount. Every person comes to the table with their own weaknesses in all topics above. You will know when you are ready. You will see a problem and say..."Oh...yeah I know what principle to apply here". The more you get that spark, the higher the chances you pass.



Should I time myself?

Yes and no. Time is critical. Speed is critical. But timing yourself is useless if you are very uncomfortable with a specific problem class. I suggest solving many problems (peeping the solutions often is fine...just gain comfort) in your weak points. Then when you get sick of jumping to answers you will soon take the leap and just solve the problem yourself because you will become familiar with the techniques required for the approach. (this is how backtracking was for me. I went from total confusion to it becoming a default way of thinking.)



What should I focus my studying on?

Weak points. And then popular problems. Find a list of problems the company you are interviewing at asks. No idea whether this is a myth or not (and CTCI addressed this as false...that companies repeat questions from a list) but I have friends that told me of getting exactly questions from these lists. It isn't critical but it can help.



Reading books vs. Leetcode/HackerRank?

Books give you theory. Coding gives you the memory in your fingers and the necessary practice. Like...if I know a problem will use BFS, how fast can I put the logic in place for a basic search? If I know that a problem may use a heap...how fast can I throw up a priority queue with the right comparator (if it is a max or min heap...Java defaults to a min heap without a comparator)



Hope this helps someone...or made any sense...I typed it up quickly.



I'm honestly not THAT good...like problems still stump me...but I've come a long way so my experiences may help someone else.



I'll make more posts if people want more small tips.

*/