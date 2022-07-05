/*
Author : unKNOWN
Date: 07:00, 03-07-2022

Content: Queue and its basic functionalities
*/

#include<iostream>
#include<queue>
using namespace std;

struct ArrayQueue{
    int size,cap;
    int *arr;
    ArrayQueue(int c){
        size = 0;
        cap = 10;
        arr = new int[cap];
    }
    bool isFull(){
        return size == cap?1:0;
    }
    bool isEmpty(){
        return size==0?1:0;
    };
    int getsize(){
        return size;
    };
    int getFront(){
        if(size<0)
            return INT32_MIN;
        return arr[0];
    };
    int getRear(){
        return arr[size-1];
    };
    void enque(int num){
        if(isFull()==1)
            return ;
        arr[size] = num;
        size++;
    };
    void deque(){
        if(isEmpty()==1)
            return ;
        for(int i=0;i<size-1;i++)
            arr[i] = arr[i+1];
        size--;
    };

};

struct CircularArrayQueue{
    int cap;
    int front,size;
    int *arr;
    CircularArrayQueue(int cap){
        cap = cap;
        front = -1;
        size = 0;
        arr = new int[cap];
    }
    bool isFull(){
        return cap==size;
    }
    bool isEmpty(){
        return size==0;
    }
    int getFront(){
        if(isEmpty())
            return -1;
        return front;
    }
    int getRear(){
        if(isEmpty())
            return -1;
        return (front+size-1)%cap;
    }
    void enque(int num){
        if(isFull())
            return ;
        int rear = getRear();
        rear = (rear+1)%cap;
        arr[rear] = num;
        size++; 
    }
    void deque(){
        if(isEmpty())
            return ;
        front = (front+1)%cap;
        size--;
    }
};

struct node{
    int data;
    node* next;
    node(int val){
        data = val;
        next = NULL;
    }
};

struct LinkedListQueue{
    node* front;
    node* rear;
    int size;
    LinkedListQueue(){
        front = NULL;
        rear = NULL;
        size = 0;
    }
    
    int getsize(){
        return size;
    }

    int getFront(){
        if(size==0)
            return -1;
        return front->data;
    }

    int getRear(){
        if(size==0)
            return -1;
        return rear->data;
    }

    bool isEmpty(){
        return size==0;
    }

    void enque(int val){
        
        node* temp = new node(val);
        if(front == NULL)
        {
            front = rear =  temp;
            size++;
            return;
        }
        rear->next = temp;
        rear = rear->next;
        size++;
    }

    void deque(){
        node* temp = front;
        front = front->next;
        if(front == NULL)
            rear = NULL;
        free(temp);
        size--;
    }
};

int main(){
    queue<int> a;
    for(int i=1;i<10;i++)
       { a.push(i*i*i);
        cout<<a.front()<<" ";
}
    for(int i=0;i<5;i++)
        a.pop();
    std::cout<<"\nFront = "<<a.front()<<"\nLast = "<<a.back()<<"\nempty ?"<<a.empty()<<"\nsize = "<<a.size();
}