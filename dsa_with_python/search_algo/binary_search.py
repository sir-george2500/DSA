"""
A Binary Search is a algorithm that as a complexity of 0log(n)
"""
def binary_search(list , target):
    start = 0
    end = len(list)-1

    while start<=end:
        midpoint = (start+end)//2

        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] <target:
            start = midpoint + 1
        else:
            end = midpoint -1
    return None


def verify(index):
    if index is not None :
        print("print target was found")
        print("here is the target", index)
    else:
        print("print target not found in the list")

numbers = [1,2,3,4,5,6,8,9,10,11,12]

result = binary_search(numbers,12)

verify(result)

        

