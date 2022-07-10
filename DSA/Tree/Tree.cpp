/*
Author: unKNOWN
Date : 06-07-2022

Content :  
    Tree Basics
    Depth Traversals ->
                1. INORDER
                2. PREORDER
                3. POSTODER
    Height of a Tree
    nodes at K Distance
    Level Order Traversal (BFT) using queue
    Size

*/

#include<iostream>
#include <bits/stdc++.h>
#include<queue>
using namespace std;

struct node {
    int key;
    node *left;
    node *right;
    node(int k){
        key = k;
        left = right = NULL;
    }
};

void inorder(node* root){
    if(root!=NULL){
        inorder(root->left);
        cout<<root->key<<" ";
        inorder(root->right);
    }
}

void preorder(node* root){
    if(root!=NULL){
        cout<<root->key<<" ";
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(node* root){
    if(root!=NULL){
        postorder(root->left);
        postorder(root->right);
        cout<<root->key<<" ";
    }
}

int max(int a,int b){
    return a>b?a:b;
}

int height(node* root){
    if(root==NULL)
        return 0;
    return 1+max(height(root->left),height(root->right));
}

void printKDist(node* root,int k){
    if(root == NULL)
        return;
    if(k==0)
    {
        cout<<root->key<<" ";
        return;
    }
    else{
        printKDist(root->left,k-1);
        printKDist(root->right,k-1);
    }
}

void printLevel(node* root){
    queue<node*> q;
    q.push(root);
    q.push(NULL);
    while(q.size()>1){
        node* temp = q.front();
        q.pop();
        if(temp == NULL){
            cout<<"\n";
            q.push(NULL);
            continue;
        }
        cout<<temp->key<<" ";
        if(temp->left!=NULL)
            q.push(temp->left);
        if(temp->right!=NULL)
            q.push(temp->right);
    }
}

int size(node* root){
    if(root == NULL)
        return 0;
    return 1+size(root->left)+size(root->right);
}

int getMax(node* root){
    if(root == NULL)
        return INT32_MIN;
    return max(root->key,max(getMax(root->left),getMax(root->right)));
}

void leftView(node* root){
    queue<node*> q;
    q.push(root);
    while(!q.empty()){
        int count = q.size();
        for(int i=0;i<count;i++){
            node* temp = q.front();
            q.pop();
            if(i==0)
                cout<<temp->key<<" ";
            if(temp->left!=NULL)
                q.push(temp->left);
            if(temp->right!=NULL)
                q.push(temp->right);
        }
    }
}

int childrenSumProperty(node* root){
    if(root->left==NULL && root->right==NULL)
        return 1;
    if(root->left==NULL)
        return (root->key ==root->right->key) && childrenSumProperty(root->right);
    if(root->right ==NULL)
        return (root->key == root->left->key) && childrenSumProperty(root->left) ;

    return  (root->key == root->left->key+root->right->key)&& childrenSumProperty(root->right)&& childrenSumProperty(root->left) ;
}


int main(){
	// node *root=new node(10);
	// root->left=new node(20);
	// root->right=new node(30);
	// root->left->left=new node(40);
	// root->left->right=new node(50);
	// root->right->right=new node(70);
	// root->right->right->right=new node(80);

    node *root=new node(20);
	root->left=new node(8);
	root->right=new node(12);
	root->right->left=new node(3);
	root->right->right=new node(10);
    int k = 2;

    cout<<"inorder = ";
	inorder(root);
    cout<<"\npreorder = ";
    preorder(root);
    cout<<"\npostorder = ";
    postorder(root);
    cout<<"\nheight = "<<height(root)<<"\n";
    printKDist(root,k);
    cout<<"\nBFT = ";
    printLevel(root);
    cout<<"\nSize = "<<size(root);
    cout<<"\nMax = "<<getMax(root)<<"\n";
    leftView(root);
    cout<<"\nSum="<<childrenSumProperty(root)<<"\n";
    return 0;
}