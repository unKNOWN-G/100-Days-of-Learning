/*
Author : unKNOWN
Date : 06-07-2022

Content : Generating NUmber WIth a DIGIT
*/

#include<iostream>
#include<string>
#include<queue>
using namespace std;

void generateNumbers(int arr[],int size,int out){
    queue<string> a;
    int count = 0;
    for(int i=0;i<size;i++){
        a.push((to_string(arr[i])));
    }

    for(int i=0;i<out&& i+a.size()<out;i++){
        string temp = a.front();
        cout<<temp<<" ";
        count++;
        a.pop();
        for(int i=0;i<size;i++){
            a.push((temp+to_string(arr[i])));
        }
    }
    while(!a.empty() && count<out)
    {
        string temp = a.front();
        cout<<temp<<" ";
        a.pop();
        count++;
    }
}

int main(){
    int arr[] = {10,12};
    int size = 2;
    int out = 10;
    generateNumbers(arr,size,out);

    return 0;
}