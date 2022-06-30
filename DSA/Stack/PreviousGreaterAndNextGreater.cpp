/*
Author : unKNOWN
Date : 17:16, 30-06-2022

Content: 
    Previous Greater: Given an array of distinct integers, find the closest (positive wise) greater on left of every element. If there is no greater element on l;eft, then print -1
    Next Greater : Given an array of distinct integers, find the NextGreater(position-wise closest and on the right side) of every array elements.

*/

#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;

void printArray(int arr[],int size){
    for(int i=0;i<size;i++){
        cout<<arr[i]<<" ";
    }
    cout<<"\n";
}

void previousGreater(int nums[],int size){
    stack <int> a;
    int *arr;
    arr = (int*)malloc(sizeof(int)*size);
    a.push(arr[0]);
    arr[0] = -1;
    for(int i=1;i<size;i++)
    {
        while((!a.empty())&&a.top()<nums[i])
            a.pop();
        arr[i] = a.empty()?-1:a.top();
        a.push(nums[i]);
    }

    printArray(arr,size);
}

void nextGreater(int nums[],int size){
    stack <int> a;
    int *arr;
    arr = (int*)malloc(sizeof(int)*size);
    a.push(arr[size-1]);
    arr[0] = -1;
    for(int i=size-1;i>-1;i--)
    {
        while((!a.empty())&&a.top()<nums[i])
            a.pop();
        arr[i] = a.empty()?-1:a.top();
        a.push(nums[i]);
    }

    printArray(arr,size);
}
int main(){
    int arr[] = {1,2,3,4,5,6,5,4,3,7,9};
    previousGreater(arr,11);
    nextGreater(arr,11);
}