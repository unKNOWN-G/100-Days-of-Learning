/*
Author : K Sai Venkata Giri
Date : 13:33, 24-06-2022

Contents : 
Function  : Description
printLinkedList : Print elements of a linked list 
recurrsivelyPrintLinkedList : REcurrsively print elements of a Linked List
insertAtBeginning : Insert a node at the beginning of a linked list
insertAtEnd : INsert a node at the end of a LInked List
deleteFirstNode : Delete the first node of a linked list
deleteLastNode : Delete Last node of a linked list
insertAtGivenPosition : Insert at given poition of a linked list
searchIndex : Search index of a key in linked list
recurrsiveSearchIndex : Recursively search index of a key in alinked list
*/

#include<iostream>
using namespace std;

struct node {
    int data;
    struct node* next;
    node(int x){
        data = x;
        next = NULL;
    }
};

void printLinkedList(node *a)
{
    while(a!=NULL)
    {
        cout<<a->data<<"->";
        a = a->next;
    }
    cout<<"\n";
}

void recurrsivelyPrintLinkedList(node *a)
{
    if(a==NULL)
    {
        cout<<"\n";
        return;
    }
    cout<<a->data<<"->";
    return recurrsivelyPrintLinkedList(a->next);
}

node* insertAtBeginning (int data, node *head){
    node *q = new node(data);
    if(head!=NULL)
        q->next = head;
    return q;
}

node* insertAtEnd(int data,node* head)
{
    node *p = head;
    while(p->next!=NULL)
        p = p->next;
    node *q = new node(data);
    p->next = q;
    return head;
}

node* deleteFirstNode(node* head)
{
    if(head == NULL)
        return NULL;
    node* q = head;
    q = q->next;
    free(head);
    return q;
}

void deleteLastNode(node* head)
{
    if(head == NULL)
        return;
    if(head->next == NULL)
    {
        delete head;
        return;
    }
    node *q = head;
    while(q->next->next!=NULL)
        q = q->next;
    q->next = NULL;
}   

void insertAtGivenPosition(node* head, int data, int position)
{
    node *temp = head;
    node *q  = new node(data);
    while(position-1!=0 && temp!=NULL)
    {
        temp = temp->next;
        position--;
    }
    if(temp == NULL)
        return;

    q->next = temp->next;
    temp->next = q;
}

int searchIndex(node* head,int key)
{
    int i=1;
    while(head!=NULL)
    {
        if(head->data == key)
            return i;
        head = head->next;
        i++;
    } 
    return -1;
}

int recurrsiveSearchIndex(node* head, int key)
{
    if(head == NULL)
        return -1;
    else if(head->data == key)
        return 1;
    else
    {
        int result = recurrsiveSearchIndex(head->next,key);
        if(result==-1)
            return -1;
        else  
            return 1+result;
    }
    
}

int main()
{

    node *head = new node(1);
    node *first = new node(2);
    node *second = new node(3);

    //linking
    head->next = first;
    first->next = second;
    second->next = NULL;

    // printing Elements of a Linked List
    recurrsivelyPrintLinkedList(head);
    head = insertAtBeginning(0,head);
    recurrsivelyPrintLinkedList(head);
    head = insertAtEnd(4,head);
    recurrsivelyPrintLinkedList(head);
    head = deleteFirstNode(head);
    recurrsivelyPrintLinkedList(head);
    deleteLastNode(head);
    recurrsivelyPrintLinkedList(head);
    insertAtGivenPosition(head,5,2);
    recurrsivelyPrintLinkedList(head);
    int index = recurrsiveSearchIndex(head,5);
    cout<<index<<"\n";

}
