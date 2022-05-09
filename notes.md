|Array Used | doublerAppend Time | doublerInser Time|
|tinyArray | 99.8 | 43
|smallArray | 116.6|48.7
|mediumArray|137 | 169 
|largeArray| 529.3| 9.1411
|extraLargeArray|3.219|1.126


Doubler append: slower than function at smaller inputs
InsertAppend:  starts faster that timeAppend but slows faster than it
Conclusion: doublerAppend scales better than Insert possibly because of linear timing