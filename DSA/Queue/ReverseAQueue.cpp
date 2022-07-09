/*
Author : unKNOWN
Date : 06-07-2022

Contents : Reversing A Queue
*/

#include<iostream>
#include<stdlib.h>
#include<stack>
#include<queue>
using namespace std;

void printQueue(queue<int> arr){
    while((!arr.empty()))
    {
        cout<< arr.front()<<" ";
        arr.pop();
    }
    cout<<"\n";
}

queue<int> queueData(int *arr, int size){
    queue<int> a;
    for(int i=0;i<size;i++){
        a.push(arr[i]);
    }
    return a;
}
queue<int> reverseAQueueWithStack(queue<int> arr){
    stack<int> a;
    queue<int> b;

    while(!arr.empty()){
        a.push(arr.front());
        arr.pop();
    }

    while(!a.empty()){
        b.push(a.top());
        a.pop();
    }

    return b;
}

void reverseAQueueWithRecurssion(queue<int>q, queue<int>&reverse){
    if(q.empty()){
        return;
    }
    int a = q.front();
    q.pop();
    reverseAQueueWithRecurssion(q,reverse);
    reverse.push(a);
}

int main(){
    int arr[] = {1,2,3,4,5,6,7,8,9,10};
    int size = 10;
    queue<int> queuedData = queueData(arr,size);
    queue<int> reversedData;
    printQueue(queuedData);
    reverseAQueueWithRecurssion(queuedData,reversedData);
    printQueue(reversedData);
    return 0;
}