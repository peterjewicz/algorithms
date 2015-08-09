//
//  main.cpp
//  test
//
//  Created by Peter Jewicz on 8/6/15.
//  Copyright (c) 2015 Peter Jewicz. All rights reserved.
//

#include <iostream>
using namespace std;

int main()
{

    struct node{
        int data;
        node *nextNode;
    };
    
    node *head; //points to the first node
    node *currentNode; //used to create new nodes
    node *walkingNode; //used to walk through nodes

    
    
    
    head = new node;
    head->nextNode = 0;
    head->data = 101;
    
    currentNode = head; //set reference to memory loction of the first node
    
  
    currentNode->nextNode = new node;  //Remove null from next and insert new node
    currentNode = currentNode->nextNode; // set current node equal to the new node created
    currentNode->nextNode = 0;
    currentNode->data = 30;
    
    
    walkingNode = head; //walk through each node
    while(walkingNode !=0 ) //last node will have no pointer to new node
    {
        std::cout << walkingNode->data << endl;
        walkingNode = walkingNode->nextNode; //advance to next node
    }
    
    
    
    

    
    
   
//    std::cout << head->data;
    return 0;
}

