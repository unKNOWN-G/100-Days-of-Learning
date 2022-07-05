/*
AUthor : unKNOWN
Date : 01-07-2022

Contnent: Largest Rectangle Of Ones
*/

#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;
#define R 4 
#define C 4


int max (int a,int b){
    return a>b?a:b;
}

int min (int a,int b){
    return a<b?a:b;
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
    int max_area = 0;
    for(int i=0;i<size;i++){
        max_area = max(max_area,arr[i]*(next[i]-prev[i]-1));
    }
    return max_area;
}

int largestRectangleArea(int arr[][C])
{
    int row = R;
    int col = C;
    int max_area = largestRectangualarAreaInHistogram(arr[0],col);
    cout<<max_area<<"\n";
    for(int i=1;i<row;i++){
        for(int j= 0;j<col;j++){
            if(arr[i][j]==1)
                arr[i][j] += arr[i-1][j];
        }
        max_area = max(max_area,largestRectangualarAreaInHistogram(arr[i],C));
        cout<<max_area<<"\n";
    }

    return max_area;
}

int main(){

    int mat[][C] = { 
        { 0, 1, 1, 0 }, 
        { 1, 1, 1, 1 }, 
        { 1, 1, 1, 1 }, 
        { 1, 1, 0, 0 }, 
    }; 
  
    cout << "Area of maximum rectangle is " << largestRectangleArea(mat); 

    return 0;
}