
/**
 * Class BlockStack
 * Implements character block stack and operations upon it.
 *
 * $Revision: 1.4 $
 * $Last Revision Date: 2014/02/07 $
 *
 * @author Serguei A. Mokhov, mokhov@cs.concordia.ca;
 * Inspired by an earlier code by Prof. D. Probst

 */
import StackExceptions.*;

class BlockStack
{
	/**
	 * # of letters in the English alphabet + 2
	 */
	public static final int MAX_SIZE = 28;

	/**
	 * Default stack size
	 */
	public static final int DEFAULT_SIZE = 6;

	/**
	 * Current size of the stack
	 */
	private int iSize = DEFAULT_SIZE;

	/**
	 * Current top of the stack
	 */
	private int iTop  = 3;

	/**
	 * stack[0:5] with four defined values
	 */
	private char acStack[] = new char[] {'a', 'b', 'c', 'd', '$', '$'};
	


	/**
	 * counter used to track # times the stack is accessed
	 */
	private int accessCount = 0;

	/**
	 * Default constructor
	 */
	public BlockStack()
	{
	}

	/**
	 * Supplied size
	 */
	public BlockStack(final int piSize)
	{


                if(piSize != DEFAULT_SIZE)
		{
			this.acStack = new char[piSize];

			// Fill in with letters of the alphabet and keep
			// 2 free blocks
			for(int i = 0; i < piSize - 2; i++)
				this.acStack[i] = (char)('a' + i);

			this.acStack[piSize - 2] = this.acStack[piSize - 1] = '$';

			this.iTop = piSize - 3;
                        this.iSize = piSize;
		}
	}

	/**
	 * Picks a value from the top without modifying the stack
	 * @return top element of the stack, char
	 */
	public char pick()
	{
		accessCount++;
		return this.acStack[this.iTop];
	}

	/**
	 * Returns arbitrary value from the stack array
	 * @return the element, char
	 */
	public char getAt(final int piPosition)
	{
		accessCount++;
		return this.acStack[piPosition];
	}

	/**
	 * Standard push operation
	 */
	public void push(final char pcBlock)
	{
		try{
			
			if(this.iTop == this.iSize-1)
				throw new StackFullException();
		
			if(isEmpty()== true)
			{
				this.acStack[++this.iTop] = pcBlock;
				this.acStack[++this.iTop] = 'a';
			}
			
			else	
			this.acStack[++this.iTop] = pcBlock;
			
			accessCount++;
		}
		
		catch(StackFullException e){
			System.out.println(e.getMessage());
		};

	}

	/**
	 * Standard pop operation
	 * @return ex-top element of the stack, char
	 */
	public char pop()
	{
		try{
			if(this.isEmpty())
				throw new StackEmptyException();
			
			char cBlock = this.acStack[this.iTop];
			this.acStack[this.iTop--] = '$';// Leave prev. value undefined
			
			accessCount++;
			
			return cBlock;
		}
		catch(StackEmptyException e){
			System.out.println(e.getMessage());
			return '$';
		}
		
	}
	
	public boolean isEmpty()
	{
		return (this.iTop == -1);
	}
	
	/*
	 * getter methods 
	 */
	public int getiSize() {
		return iSize;
	}

	public int getiTop() {
		return iTop;
	}

	public char[] getAcStack() {
		return acStack;
	}

	public int getAccessCounter() {
		return accessCount;
	}
}

// EOF
