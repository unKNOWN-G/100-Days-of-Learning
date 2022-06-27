#include <iostream>
#include <stack>
#include <string>

struct Bracket {
    Bracket(char type, int position):
        type(type),
        position(position)
    {}

    bool Matchc(char c) {
        if (type == '[' && c == ']')
            return true;
        if (type == '{' && c == '}')
            return true;
        if (type == '(' && c == ')')
            return true;
        return false;
    }

    char type;
    int position;
};

int main() {
    std::string text;
    getline(std::cin, text);
    std::stack <Bracket> opening_brackets_stack;
    int flag = 1;
    int position;
    for ( position = 0; position < text.length(); ++position) {
        char next = text[position];
        
        Bracket A(next,position+1);
        if (next == '(' || next == '[' || next == '{') {
            opening_brackets_stack.push(A);
        }

        if (next == ')' || next == ']' || next == '}') {
            if(opening_brackets_stack.empty())
                {
                    std::cout<<position+1;
                    flag = 0;
                    break;
                }
            else if(!(opening_brackets_stack.top().Matchc(A.type)))
                {
                    std::cout<<position+1;
                    flag = 0;
                    break;
                }
            else
                opening_brackets_stack.pop();
        }
    }

    if(flag){
        if(opening_brackets_stack.empty())
            std::cout<<"Success";
        else
            std::cout<<opening_brackets_stack.top().position;
    }

    return 0;
}
