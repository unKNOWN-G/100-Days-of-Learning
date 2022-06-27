/*
Author : unKNOWN
Date : 27-06-2022

Content : Given a string of parenthesis ({, }, (, ), [ and ]), we need to check if this string is balanced or not.
*/

#include<iostream>
#include<stack>
#include<string.h>
using namespace std;


bool isMatching(char a, char b){
    if((a=='(' && b==')')||(a=='{' && b=='}')||(a=='[' && b==']'))
        return 1;
    else
        return 0;
}

bool balanceParenthesis(char *a){
    stack<char> par;
    while(*a!='\0')
    {
        if(*a == '(' || *a == '[' || *a == '{')
            par.push(*a);
        else{
            if(par.empty() == true)
                return false;
            if(!isMatching(par.top(),*a))
                return false;
            else
                par.pop();
        }
        a++;
    }
    return par.empty()?1:0;
}

int main(){
    string a;
    cin>>a;
    if(balanceParenthesis(strdup(a.c_str())))
        cout<<"Its a balanced in parenthesis string";
    else
        cout<<"Its not a balnced Parenthesis String";

}