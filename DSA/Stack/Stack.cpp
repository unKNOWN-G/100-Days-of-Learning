/*
Author : unKNOWN
Date : 02:23, 27-06-2022

Content : Basic Implementtion of Stack using Lineked List
*/

#include<iostream>
#include<vector>
#include<stack>
using namespace std;

struct ArrayStack{
    int cap;
    int top;
    int *arr;
    ArrayStack(int capacity){
        cap = capacity;
        arr = new int [cap];
        top = -1;
    }
    void push(int x){
        if(top<cap-1)
            top += 1;
            arr[top] = x;
    }
    int pop(){
        if(top<=-1)
            return -1;
        int x = arr[top];
        top-=1;
        return x;
    }
    int peek(){

        return arr[top];
    }
};

struct VectorStack{
    vector <int> a;
    int top;

    void push(int x){
        top++;
        a.push_back(x);
    }

    int pop(){
        if(top!=-1)
        {
            int temp = a[top];
            top--;
            return temp;
        }
        else
            return -1;
    }

    int peek(){
        return a[top];
    }

    VectorStack(){
        top = -1;
    }
};

struct node{
    int data;
    node *next;
    node(int x){
        data = x;
    };
    
};

struct LinkedListAtTailStack{

    node *head;

    void push(int x){
        node *q = head;
        while(q->next!=NULL)
            q = q->next;

        node* temp = new node(x);
        q->next = temp;
    }

    node* pop(){
        node *q = head;
        while(q->next->next!=NULL)
            q = q->next;
        
        return q->next;
    }

    node *peek(){
        node *q= head;
        while(q->next!=NULL)
            q = q->next;
        
        return q;
    }

};

struct LinkedListAtHeadStack{
    node *head;
    int top;

    LinkedListAtHeadStack(){
        head = NULL;
        top = -1;
    }

    void push(int x){
        node *temp = new node(x);
        temp->next = head;
        head = temp;
        top++;
    }
    
    int pop(){
        if(head == NULL)
            return INT32_MIN;

        int res = head->data;
        node *temp = head;
        head = head->next;
        delete(temp);
        top--;

        return res;
    }

    int peek(){
        if(head == NULL)
            return INT32_MIN;
        return head->data;
    }

};

int main()
{
    stack<int> a;
    a.push(1);
    a.push(3);
    a.pop();
    cout<<a.top()<<"\n";
}