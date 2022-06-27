/*
Author : unKNOWN
Date : 23:59, 27-06-2002

Content : Tow stack in an Array
*/
#include<iostream>
#include<stdlib.h>
using namespace std;

struct TwoStack{
    int top1;
    int top2;
    int cap;
    int *arr;
    TwoStack(int x){
        top1 = -1;
        top2 = x;
        cap = x;
        arr = (int *)malloc(sizeof(int)*cap);
    }

    void push1(int x){
        if(top1>top2-1)
            cout<<"Array is Full";
        else{
            top1++;
            arr[top1] = x;
        }
    }

    void push2(int x){
        if(top1>top2-1)
            cout<<"Array is Full";
        else{
            top2--;
            arr[top2] = x;
        }
    }

    int pop1(){
        if(top1==-1)
            return INT32_MIN;
        int x = arr[top1];
        top1--;
        return x;
    }

    int pop2(){
        if(top2==cap)
            return INT32_MAX;
        int x = arr[top2];
        top2++;
        return x;
    }
};

int main(){
    TwoStack a(10);
    a.push1(10);
    a.push2(20);
    a.push1(30);
    a.push2(40);
    a.push1(50);    
    int flag = 1;
    while(flag){
        int x = a.pop1();
        if(x == INT32_MIN)
            flag = 0;
        else
            cout<<x<<"\n";
    }

    flag = 1;
    while(flag){
        int x = a.pop2();
        if(x == INT32_MAX)
            flag = 0;
        else
            cout<<x<<"\n";
    }
}