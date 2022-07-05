/*
Author : unKNOWN
Date : 30-06-2022

Content : Largest Rectangualar Area In Histogram
*/

#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;

int max (int a,int b){
    return a>b?a:b;
}
int min (int a,int b){
    return a<b?a:b;
}

void printArray(int arr[],int size){
    for(int i=0;i<size;i++){
        cout<<arr[i]<<" ";
    }
    cout<<"\n";
}

int* previousSmaller(int nums[],int size){
    stack <int> a;
    int *arr;
    arr = (int*)malloc(sizeof(int)*size);
    a.push(0);
    arr[0] = -1;
    for(int i=1;i<size;i++)
    {
        while((!a.empty())&&nums[a.top()]>nums[i])
            a.pop();
        arr[i] = a.empty()?-1:a.top();
        a.push(i);
    }

    return arr;
}

int* nextSmaller(int nums[],int size){
    stack <int> a;
    int *arr;
    arr = (int*)malloc(sizeof(int)*size);
    a.push(size-1);
    arr[size-1] = size;
    for(int i=size-2;i>-1;i--)
    {
        while((!a.empty())&&nums[a.top()]>nums[i])
            a.pop();
        arr[i] = a.empty()?size:a.top();
        a.push(i);
    }
    return arr;
    
}

int largestRectangualarAreaInHistogram(int arr[],int size){
    int *prev = previousSmaller(arr,size);
    int *next = nextSmaller(arr,size);
    printArray(prev,size);
    printArray(next,size);
    int max_area = 0;
    for(int i=0;i<size;i++){
        max_area = max(max_area,arr[i]*(next[i]-prev[i]-1));
    }
    return max_area;
}


int main(){
    int arr[]={6,2,5,4,1,5,6};
    int n=7;
    cout<<"Maximum Area: "<<largestRectangualarAreaInHistogram(arr,n);
    return 0;
}