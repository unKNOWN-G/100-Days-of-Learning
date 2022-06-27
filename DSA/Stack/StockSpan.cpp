/*
Author : unKNOWN
Date : 00:42, 28-06-2022

Content : Stock Span Problem
*/

#include<iostream>
#include<stack>
using namespace std;

void stockSpan(int arr[],int length){
    int *span;
    stack<int> a;
    span = (int*)malloc(sizeof(int)*length);
    span[0] = 1;
    a.push(0);
    for(int i =1;i<length;i++)
    {
        while((!a.empty())&& arr[a.top()]<=arr[i])
            a.pop();
        if(a.empty())
            span[i] = i+1;
        else
            span[i] = i-a.top();
        
        a.push(i);
    }

    for(int i=0;i<length;i++)
    {
        cout<<span[i]<<"\n";
    }

}

int main(){
    int a[] = {10,20,30,40,30,20,10,0,10,20};
    stockSpan(a, *(&a + 1) - a);
}