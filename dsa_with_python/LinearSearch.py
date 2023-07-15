"""
A Linear Search is a algorithm that as a complexity of O(n)
"""

def linearSearch(list , target):
    for i in range(0,len(list)):
        if(list[i]==target):
            return i
    return None

def verify(index):
    if index is not None :
        print("print target was found")
    else:
        print("print target not found in the list")

numbers = [1,2,3,4,5,6,8,9,10,11,12]

result = linearSearch(numbers,12)

verify(result)