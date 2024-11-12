'use strict'

const content = `
[
	{
		"title": "Libft",
		"description": "This project is about understanding and reimplementing some highly usefull c function into my own c library that will be used throughout the upcomming projects.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">This project must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Your Makefile should be able to compile a library. You must use the command ar to create your library.</li><li class=\\"list-item\\">You have to redo a set of functions from libc, they must have the same behavior as the original function. plus some additional functions for string manipulation, add them to your library.</li><li class=\\"list-item\\">As a bonus, you have to create a set of function for manipulating linked lists (creating, adding, removing, clearing…), add them to you library.</li></ul>",
		"link": "https://github.com/tarikkudesu/Libft"
	},
	{
		"title": "ft_printf",
		"description": "The goal of this project is creating my own version of printf, It is to understand and implement a c variadic function.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">This project must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Your Makefile should be able to compile a library. You must use the command ar to create your library.</li><li class=\\"list-item\\">You have to recode the printf() function from libc. and add it to your library.</li><li class=\\"list-item\\">Before starting this assignement you have to understand how variadic functions work.</li><li class=\\"list-item\\">Your function has to handle the following conversions: cspdiuxX%</li></ul>",
		"link": "https://github.com/tarikkudesu/ft_printf"
	},
	{
		"title": "get_next_line",
		"description": "The goal of this project is to create a function that reads content line by line from a file, a network or even STDIN, an essential function for the upcoming projects.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">This project must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">Repeated calls to your function should let you read the text file pointed to by the file descriptor, one line at a time.</li><li class=\\"list-item\\">The returned line has to be terminated by a \\n.</li><li class=\\"list-item\\">Your function should return the line that was read. If nothing was read, return a NULL.</li><li class=\\"list-item\\">As a bonus, Your function has to be able ti manage multiple file descriptors at the same time.</li></ul>",
		"link": "https://github.com/tarikkudesu/get_next_line"
	},
	{
		"title": "Born2beroot",
		"description": "This project is an introduction to the wonderful world of virtualization and system administration, The goal is to create a virtual machine under specific instructions.",
		"lang": ["Linux", "VirtualBox"],
		"details": "<div class=\\"title-1\\">Project Requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">You will create your first machine in VirtualBox. aka You will setup a server.</li><li class=\\"list-item\\">You server must have no graphical interface.</li><li class=\\"list-item\\">Choose an operating system, either Debian or Rocky. Debian is highly recommended.</li><li class=\\"list-item\\">You have to create at least 2 encrypted partitions using LVM.</li><li class=\\"list-item\\">You to set up ssh to be running on port 4242, it must not be possible to connect using SSH as root.</li><li class=\\"list-item\\">Configure your system using UFW to leave only port 4242 open.</li><li class=\\"list-item\\">You have to implement a strong password policy :</li><li class=\\"list-item\\">Your password has to expire every 30 days.</li><li class=\\"list-item\\">The minimum number of days allowed before the modification of a password will be set to 2.</li><li class=\\"list-item\\">The user has to receive a warning message 7 days before their password expires.</li><li class=\\"list-item\\">Your password must be at least 10 characters long. uppercase, lowercase, a number, no more than 3 consecutive identical characters.</li><li class=\\"list-item\\">The password must not include the name of the user.</li><li class=\\"list-item\\">The following rule does not apply to the root password: The password must have at least 7 characters that are not part of the former password.</li><li class=\\"list-item\\">There has to be two users, a root user and a user of your choice that belongs the sudo group.</li><li class=\\"list-item\\">Limit Authentication using sudo to 3 attempts.</li><li class=\\"list-item\\">Actions using sudo have to be archived.</li><li class=\\"list-item\\">You have to create a simple script that displays system informations every 10 minutes from server startup.</li></ul>"
	},
	{
		"title": "push_swap",
		"description": "This project involves sorting data on a stack, with a limited set of instructions, and the smallest number of moves. acquiring the skills to manipulate various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting is essential.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">The program must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">You have two stacks; a and b, initialy a is full and be is empty.</li><li class=\\"list-item\\">There is only a limited set of instruction possible (swap a, swap b, swap a b, push a, push b, rotate a, rotate b, rotate a b, reverse rotate a, reverse rotate b, reverse rotate a b).</li><li class=\\"list-item\\">You have to implement a sorting algorithm.</li><li class=\\"list-item\\">Your program must the smallest list of instructions possible to sort the stack a, the smallest number being at the top.</li><li class=\\"list-item\\">Stack b must be empty at the end of the program.</li><li class=\\"list-item\\">100 random numbers have to be sorted in under 700 instruction.</li><li class=\\"list-item\\">Each instruction must be displayed.</li><li class=\\"list-item\\">500 random numbers have to be sorted in under 5500 instruction.</li><li class=\\"list-item\\">Display an error in case something goes wrong.</li><li class=\\"list-item\\">As a bonus implement a checker program that reads instruction and displays OK if sorted, KO otherwise.</li></ul>",
		"link": "https://github.com/tarikkudesu/push_swap"
	},
	{
		"title": "pipex",
		"description": "The aim of this project is to understand UNIX interprocess communication by implementing redirection and pipes in a c program.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">The program must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">Display an error in case something goes wrong.</li><li class=\\"list-item\\">Your program will take four arguments :  file1 cmd1 cmd2 file2</li><li class=\\"list-item\\">You have to implement the follwing command <span class=\\"code-snipet\\">< file1 cmd1 | cmd2 > file2</span> using (access, dup, dup2, execve, exit, fork, pipe, unlink, wait, waitpid) system calls.</li><li class=\\"list-item\\">As a bonus Implement multiple commands, here_doc <span class=\\"code-snipet\\"><<</span> and append <span class=\\"code-snipet\\">>></span> .</li></ul>",
		"link": "https://github.com/tarikkudesu/pipex"
	},
	{
		"title": "FdF",
		"description": "An introduction to graphics, This project is about representing a landscape as a 3D object in which all surfaces are outlined in lines using a graphics library.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">The program must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">The use of the 42 <span class=\\"code-snipet\\">minilibx</span> is mandatory.</li><li class=\\"list-item\\">The program has to display an image in a window.</li><li class=\\"list-item\\">The management of the window must remain smooth.</li><li class=\\"list-item\\">Pressing ESC must close the window and quit the program in a clean way.</li><li class=\\"list-item\\">Clicking on the cross on the window’s frame must close the window and quit the program in a clean way.</li><li class=\\"list-item\\">The program has to represent the model in <span class=\\"bold\\">isometric projection.</span></li><li class=\\"list-item\\">The coordinates of the landscape are stored in a <span class=\\"code-snipet\\">.fdf</span> file passed as a parameter to the program.</li><li class=\\"list-item\\">Include one extra projection (Orthigraphic).</li><li class=\\"list-item\\">You should be able to Zoom in and out, Translate your model, Rotate your model.</li><li class=\\"list-item\\">The program should be able to transform a map like this :</li></ul><div class=\\"code\\"><div>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0</div><div>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0</div><div>0 0 10 10 0 0 10 10 0 0 0 10 10 10 10 10 0 0 0</div><div>0 0 10 10 0 0 10 10 0 0 0 0 0 0 0 10 10 0 0</div><div>0 0 10 10 0 0 10 10 0 0 0 0 0 0 0 10 10 0 0</div><div>0 0 10 10 10 10 10 10 0 0 0 0 10 10 10 10 0 0 0</div><div>0 0 0 10 10 10 10 10 0 0 0 10 10 0 0 0 0 0 0</div><div>0 0 0 0 0 0 10 10 0 0 0 10 10 0 0 0 0 0 0</div><div>0 0 0 0 0 0 10 10 0 0 0 10 10 10 10 10 10 0 0</div><div>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0</div><div>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0</div></div><p class=\\"para\\">Into something like this.</p><img src=\\"../project-assets/img/fdf.png\\" alt=\\"\\" class=\\"image\\">",
		"link": "https://github.com/tarikkudesu/fdf"
	},
	{
		"title": "minishell",
		"description": "As the name suggests, the goal is creating a simple shell, it needs to implement the most essential features of a shell",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">The program must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">Display an error in case something goes wrong.</li><li class=\\"list-item\\">You have to implement your own shell.</li><li class=\\"list-item\\">Display a prompt when waiting for a new command.</li><li class=\\"list-item\\">You must have a working history.</li><li class=\\"list-item\\">Search and launch the right executable (based on the PATH variable or using a relative or an absolute path).</li><li class=\\"list-item\\">Only one global variable is permitted.</li><li class=\\"list-item\\">Handle ’ (single quote) which should prevent the shell from interpreting the metacharacters in the quoted sequence.</li><li class=\\"list-item\\">Handle \\" (double quote) which should prevent the shell from interpreting the metacharacters in the quoted sequence except for $(dollar sign).</li><li class=\\"list-item\\">Implement redirections: <span class=\\"code-snipet\\"><</span> <span class=\\"code-snipet\\">></span> <span class=\\"code-snipet\\">>></span> and <span class=\\"code-snipet\\"><<</span> .</li><li class=\\"list-item\\">Implement pipes <span class=\\"code-snipet\\">|</span> The output of each command in the pipeline is connected to the input of the next command via a pipe.</li><li class=\\"list-item\\">Handle environment variables ($ followed by a sequence of characters) which should expand to their values.</li><li class=\\"list-item\\">Handle $? which should expand to the exit status of the most recently executed foreground pipeline</li><li class=\\"list-item\\">Handle <span class=\\"code-snipet\\">ctrl-C</span>, <span class=\\"code-snipet\\">ctrl-D</span> and <span class=\\"code-snipet\\">ctrl-backslash</span> .</li><li class=\\"list-item\\">You must implement the following builtins ()</li><li class=\\"list-item\\"><span class=\\"code-snipet\\">echo</span> with option -n, <span class=\\"code-snipet\\">cd</span> with only a relative or absolute path, <span class=\\"code-snipet\\">pwd</span> with no options, <span class=\\"code-snipet\\">export</span> with no options, <span class=\\"code-snipet\\">unset</span> with no options, <span class=\\"code-snipet\\">env</span> with no options or arguments, <span class=\\"code-snipet\\">exit</span> with no options.</li></ul>",
		"link": "https://github.com/tarikkudesu/minishell"
	},
	{
		"title": "Philosophers",
		"description": "This project aims to teach concurrent programming, focusing on multithreading and multiprocessing.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">The program must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">Display an error in case something goes wrong.</li><li class=\\"list-item\\">You have solve the dining philosophers problem using threads.</li><li class=\\"list-item\\">Each philosopher should be a thread.</li><li class=\\"list-item\\">Your program should take the number of philosophers, time to die, time to eat, time to sleep.</li><li class=\\"list-item\\">There is one fork between each pair of philosophers. Therefore, if there are several philosophers, each philosopher has a fork on their left side and a fork on their right side. If there is only one philosopher, there should be only one fork on the table.</li><li class=\\"list-item\\">To prevent philosophers from duplicating forks, you should protect the forks state with a mutex for each of them.</li><li class=\\"list-item\\">Your program should not contain data races.</li><li class=\\"list-item\\">As a bonus, implement the solution to the dining philosophers problem using semaphores.</li></ul>",
		"link": "https://github.com/tarikkudesu/philosophers"
	},
	{
		"title": "cub3d",
		"description": "This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever. the program has to implement a ray-casting algorithm in order to make a dynamic view inside a maze, in which you'll have to find your way.",
		"lang": ["C", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">The program must be written in C, a Makefile must be provided.</li><li class=\\"list-item\\">Memory leaks are not to be tolerated.</li><li class=\\"list-item\\">The use of the 42 <span class=\\"code-snipet\\">minilibx</span> is mandatory.</li><li class=\\"list-item\\">The program has to display an image in a window.</li><li class=\\"list-item\\">The management of the window must remain smooth.</li><li class=\\"list-item\\">Pressing ESC must close the window and quit the program in a clean way.</li><li class=\\"list-item\\">Clicking on the cross on the window’s frame must close the window and quit the program in a clean way.</li><li class=\\"list-item\\">Your program must take a configuration file containing a map, textures, colors, it must parsed and checked if the map is closed, if not display an error.</li><li class=\\"list-item\\">Display different wall textures that vary depending on which side the wall is facing (North, South, East, West).</li><li class=\\"list-item\\">Set the floor and ceiling colors to two different ones.</li><li class=\\"list-item\\">The left and right arrow keys must allow you to look left and right in the maze.</li><li class=\\"list-item\\">The W, A, S, and D keys must allow you to move the point of view through the maze.</li><li class=\\"list-item\\">The player must not traverse walls.</li><li class=\\"list-item\\">As a bonus, add animated doors that open and close, animated sprites, mouse control, and a minimap.</li><li class=\\"list-item\\">Your program must be able to turn somthing like this :</li></ul><div class=\\"code\\"><div>F 139,99,58</div><div>C 171,154,137</div><div>NO ./assets/north.xpm</div><div>SO ./assets/south.xpm</div><div>WE ./assets/west.xpm</div><div>EA ./assets/east.xpm</div><div>11111111111111</div><div>10000000000001</div><div>10303030303001</div><div>10303030303001</div><div>10000000000001</div><div>10333333333301</div><div>20000000000001</div><div>10100001000101</div><div>10100001000101</div><div>10100001000101</div><div>10000000000001</div><div>1000000N000001</div><div>11111111111111</div></div><p class=\\"para\\">Into somthing like this :</p><img src=\\"../project-assets/img/cub3dMap.png\\" alt=\\"\\" class=\\"image\\">",
		"link": "https://github.com/tarikkudesu/Cub3d"
	},
	{
		"title": "CPP Modules",
		"description": "It's time to dive into Object Oriented Programming!, This project contains 5 inner projects designed to understand the specifities of the c++ language when compared to C and also understand new concepts like ploymorphism, overloads, inheritance, abstract classes...",
		"lang": ["Cpp", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><div class=\\"title-3\\">Module 00 :  Namespaces, classes, member functions, stdio streams, initialization lists, static, const, and \
some other basic concepts.</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : Capitalizing a set of strings.</li><li class=\\"list-item\\">ex01 : Implement a PhoneBook class to store, display, \
and search for contacts.</li><li class=\\"list-item\\">ex02 : Implement a banking class for manging accounts, opening, depositing, withdrawing, closing.</li></ul><div class=\\"title-3\\">Module 01 : \
Memory allocation, pointers to members, references, switch statement</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : Memory allocation using new.</li><li class=\\"list-item\\">ex01 : Memory \
allocation using new[].</li><li class=\\"list-item\\">ex02 : References and pointers.</li><li class=\\"list-item\\">ex03 : References and pointers.</li><li class=\\"list-item\\">ex04 : Reading and writing \
into a file.</li><li class=\\"list-item\\">ex05 : Pointers to member functions.</li><li class=\\"list-item\\">ex06 : Switch statement.</li></ul><div class=\\"title-3\\">Module 02 : Ad-hoc polymorphism, \
operator overloading and Orthodox Canonical class form.</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : Create a fixed point class to manipulate fixed point numbers. You must use Orthodox \
Canonical class form, it must have a default constructor, copy constructor, copy assignement constructor and a destructor.</li><li class=\\"list-item\\">ex01 : Add Methods for converting between floats a\
nd fixed points.</li><li class=\\"list-item\\">ex02 : Overload the operators >, <, >=, <=, ==, !=, +, -, *, /, pre-increment, post-increment, pre-decrement, and post-decrement. Add min and max static \
function.</li><li class=\\"list-item\\">ex03 : Create a static methode to check if a point is inside a triangle or not in a 2d space using fixed points.</li></ul><div class=\\"title-3\\">Module 03 : \
Inheritance</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : Create a base class with some attributes and methods.</li><li class=\\"list-item\\">ex01 : Create a derived classes that inherits \
from the base class. override the methods of the base class.</li><li class=\\"list-item\\">ex02 : Create a second derived classes that inherits from the same base class.</li><li class=\\"list-item\\">ex03 : \
Create a third class that inherits from both the derived classes at same time. Fix the dimond problem using virtual Inheritance.</li></ul><div class=\\"title-3\\">Module 04 : polymorphism, abstract classes, \
interfaces</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : You have to create an Animal base class with a makeSound method, and two Dog and Cat classes that inherit from the Animal base class and they \
must override the makeSound method. Using pointers and references to the base class, the derived classes must call the right method.</li><li class=\\"list-item\\">ex01 : The Dog and Cat classes now have a pointer \
to another class, copying objects must not be shallow, memory leaks are not to be tolerated.</li><li class=\\"list-item\\">ex02 : You have to turn the Animal class into an abstract class.</li><li class=\\"list-item\\">ex03 : \
You have to Implement a AMaterias abstract class and its concrete classes Ice and Cure. Each with a set of methods, You have to implement an ICharacter interface class and it Character concrete class, a character \
object has an inventory of four Materias, you must be able to equip and unequip a Materia. Copying must not be shallow, memory leaks are not to be tolerated. You also have to create a IMateriaSource interface class \
and its concrete class that will have an invertory of four Materias, It must be able to learn a Materia and create and return an object of it on demand. Again, copying must not be shallow, memory leaks are not to \
be tolerated.</li></ul>",
	"link": "https://github.com/tarikkudesu/cpp_modules"
	},
	{
		"title": "NetPractice",
		"description": "NetPractice is a general practical exercise to discover the world of networking by configuring small-scale networks, Understanding TCP/IP addressing is essential.",
		"lang": ["Networking"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">You have to be able to configure small-scale network.</li><li class=\\"list-item\\">You must have a basic understanding of how TCP/IP addressing works.</li><li class=\\"list-item\\">Subnetting is an important skill, You must master it.</li></ul>"
	},
	{
		"title": "CPP Module",
		"description": "Time to dive deeper into some of the most important c++ features, error handling, templates, containers...",
		"lang": ["Cpp", "Makefile"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><div class=\\"title-3\\">Module 05 : Repetition and Exceptions</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : You have to \
implement a Bureaucrat class, it has a name and a grade ranging from 1 to 150, 1 being the highest. implement an exception class to handle errors; attempting to initialize an outbounded object \
will throw an exception. Implement methods that increase and decrease the grade, if it goes out of bound, you have to throw an exception. You have to implement you own exception classes.</li><li \
class=\\"list-item\\">ex01 : You have to implement a Form class that has name, a sign stat, a grade required to sign it and a grade required to execute it. A Bureaucrat must be able to sign and \
execute a Form. same rules apply, throw an exception in case of any outbounded operation.</li><li class=\\"list-item\\">ex02 : You have to make the Form class Abstract, and inplement three additional \
concrete classes that inherit from the Form class, each with a specific action when the form is executed. same rules apply, throw an exception in case of any outbounded operation.</li><li \
class=\\"list-item\\">ex03 : You have to implement an Intern class, it must be able to create the required form class, that is one of the three previously created forms. if it doesn’t exist, \
throw an exception.</li></ul><div class=\\"title-3\\">Module 06 : C++ casts</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : Conversion of scalar types : Create a class that takes a string \
argument, detects its type(char, int, float, double), then convert it from its actual type to the other types. use <span class=\\"code-snipet\\">static_cast</span> .</li><li class=\\"list-item\\">ex01 : \
Serialization : You have be able to convert a pointer to an unsigned integer type and back, use <span class=\\"code-snipet\\">reinterpreted_cast</span> .</li><li class=\\"list-item\\">ex02 : Create a \
base class and three derived classes, using a base class pointer to a derived, you have to identify the real type of the object. Same thing for a base class reference to a derived. use <span \
class=\\"code-snipet\\">dynamic_cast</span> .</li></ul><div class=\\"title-3\\">Module 07 : C++ templates</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : You have to create the following \
function templates : <span class=\\"code-snipet\\">swap</span>, <span class=\\"code-snipet\\">min</span> and <span class=\\"code-snipet\\">max</span> that swap and return the minimum and maximum \
of the given arguments respectively.</li><li class=\\"list-item\\">ex01 : You have to create an <span class=\\"code-snipet\\">Iter</span> function template that iterates a given array of any \
type and of any size and apply a given function on each element.</li><li class=\\"list-item\\">ex02 : You have to create a class template <span class=\\"code-snipet\\">Array</span>  that behave \
exactly like <span class=\\"code-snipet\\">Array<int></span> . elements must be create an array of any size, access elements using subscript operator <span class=\\"code-snipet\\">[]</span> . \
implement a <span class=\\"code-snipet\\">size()</span> method. copying must not be shallow. memory leaks are not to be tolerated.</li></ul><div class=\\"title-3\\">Module 08 : Templated \
containers, iterators, algorithms</div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : You have to implement a function template that finds and returns an element in a given container \
of any type except for associative containers., you have to use iterators and algorithms.</li><li class=\\"list-item\\">ex01 : You have to implement two function templates that return the shortest \
and longest span in a given container. you have to use iterators and algorithms.</li><li class=\\"list-item\\">ex02 : You have to create a <span class=\\"code-snipet\\">MutanStack</span> class, it \
must be iteratable and supports all methods of the original <span class=\\"code-snipet\\">stack</span> container.</li></ul><div class=\\"title-3\\">Module 09 : The <span class=\\"bold\\">Standard Template \
Library (STL)</span></div><ul class=\\"list\\"><li class=\\"list-item\\">ex00 : You have to create a bitcoin class, the class must use at least one container. The calss has a provided database that will \
represent bitcoin price over time. You program has to an input database that contains a year and a positive float or integer value between 0 and 1000. Your program should be able to display on the \
standard output the result of the value multiplied by the exchange rate according to the date indicated in your database. You must handle invalid input, throw the appropriate exception and display \
an error message. memory leaks are not to be tolerated.</li><li class=\\"list-item\\">ex01 : You have to create a program that implements a Reverse Polish Notation, Calculates and displays the result \
on the standard output. You must handle invalid input, throw the appropriate exception and display an error message. Your program must be able to handle operations basic operations <span class=\\"code-snipet\\">+</span> , \
<span class=\\"code-snipet\\">-</span> , <span class=\\"code-snipet\\">*</span>  and <span class=\\"code-snipet\\">/</span> . You use at least one container, do not use the same container in the previous exercise.</li><li \
class=\\"list-item\\">ex02 : You have to create a program that takes a positive integer sequence as argument and sort it using the Ford-Johnson algorithm. You must handle invalid input, throw the appropriate exception \
and display an error message. You use at least two different containers, do not use the same containers in the previous exercises. Display on the standard output the integer sequence before and after being sorted, and \
the time used by each container for it to be sorted.</li></ul>",
	"link": "https://github.com/tarikkudesu/cpp_modules"
	},
	{
		"title": "Inception",
		"description": "A System Administration related Project, its aim is to discover the world of containerization, to be more specific, creating images and running small-scale services inside a docker container.",
		"lang": ["Docker", "docker-compose", "VirtualBox"],
		"details": "<div class=\\"title-2\\">Project requirements :</div><ul class=\\"list\\"><li class=\\"list-item\\">This project need to be done on a Virtual Machine.</li><li class=\\"list-item\\">A Makefile must be \
provided and it must be able to set up and mange the entire application. it has to build the Docker images using <span class=\\"code-snipet\\">docker-compose.yml</span> .</li><li class=\\"list-item\\">This \
project consists in having you set up a small infrastructure composed of different services under specific rules.</li><li class=\\"list-item\\">The containers must be built either from stable version of \
<span class=\\"code-snipet\\">Alpine</span> or <span class=\\"code-snipet\\">Debian</span>.</li><li class=\\"list-item\\">You have to write your own <span class=\\"code-snipet\\">Dockerfiles</span>, one per \
service. The Dockerfiles must be called in your <span class=\\"code-snipet\\">docker-compose.yml</span> by your Makefile.</li><li class=\\"list-item\\">You have to build your own images, it is forbidden \
to pull ready image. use an image of your choice <span class=\\"code-snipet\\">Alpine</span> or <span class=\\"code-snipet\\">Debian</span> only.</li><li class=\\"list-item\\">You have to set up a Docker container \
that contains NGINX with <span class=\\"code-snipet\\">TLSv1.2</span> or <span class=\\"code-snipet\\">TLSv1.3</span> only.</li><li class=\\"list-item\\">You have to set up a Docker container that contains WordPress \
+ php-fpm only.</li><li class=\\"list-item\\">You have to set up a Docker container that contains MariaDB only.</li><li class=\\"list-item\\">You have to set up a volume that contains your WordPress database.</li><li \
class=\\"list-item\\">You have to set up a second volume that contains your WordPress website files.</li><li class=\\"list-item\\">You have to set up a docker-network that establishes the connection between your containers.</li><li \
class=\\"list-item\\">Your containers have to restart in case of a crash.</li><li class=\\"list-item\\">Ther must be two users in your WordPress database. a root user and a user of your choice.</li><li class=\\"list-item\\">You have to \
configure your domain name so it points to your local IP address.</li><li class=\\"list-item\\">The latest tag is prohibited.</li><li class=\\"list-item\\">You have to use environment variables to store important credentials.</li><li \
class=\\"list-item\\">Your service must only be accessible through port 443.</li><li class=\\"list-item\\">The wordpress container and the database container must be able to communicate through port 3306.</li><li \
class=\\"list-item\\">The wordpress container and the NGINX container must be able to communicate through port 9000.</li><li class=\\"list-item\\">You have to Set up redis cache for your WordPress website in order \
to properly manage the cache.</li><li class=\\"list-item\\">You have to set up a <span class=\\"code-snipet\\">FTP server</span> container pointing to the volume of your WordPress website.</li><li class=\\"list-item\\">Create \
a simple static website in the language of your choice except PHP.</li><li class=\\"list-item\\">You have to set up <span class=\\"code-snipet\\">Adminer</span>.</li><li class=\\"list-item\\">Add a service of your choice.</li></ul>",
	"link": "https://github.com/tarikkudesu/Inception"
	},
	{
		"title": "webserv",
		"description": "It's time that we built our own HTTP web-server!",
		"lang": ["Cpp", "Makefile"],
		"details": "",
		"link": ""
	},
	{
		"title": "ft_transcendence",
		"description": "This project is centered around the design, development, and organization of a full-stack web application.",
		"lang": ["Web"],
		"details": "",
		"link": ""
	}
]
`;

const contentArr = JSON.parse(content);
const lang = document.querySelector(`.json-lang`);
const title = document.querySelector(`.json-title`);
const desc = document.querySelector(`.json-description`);
const keyframe1El = document.querySelectorAll(`.keyframe-1`);
const keyframe2El = document.querySelectorAll(`.keyframe-2`);
const keyframe3El = document.querySelectorAll(`.keyframe-3`);
const keyframeEl = [...keyframe1El, ...Array.from(keyframe2El).reverse(), ...keyframe3El];
const linkCon = document.querySelector('.timeline-button-container');
const link = document.querySelector('.view-on-github-button');
const detailsEl = document.querySelector(`.project-details`);
const moreBtn = document.querySelector(`.more-button`);

let highlightedKeyframeEl = keyframeEl[0];
let keyframeSelector = 0;

const updateProject = (project) => {
	if (moreBtn.textContent === 'collapse') {
		detailsEl.classList.add(`hidden`);
		moreBtn.textContent = 'Details'
	}
	title.textContent = project.title;
	desc.textContent = project.description;
	let	language = ``;
	project.lang.forEach(ele => {
		language += `<div class="lang" style="margin-top: 20px;">${ele}</div>`;
	});
	lang.innerHTML = language;
	detailsEl.innerHTML = project.details;
	if ("link" in project) {
		link.setAttribute('href', project.link);
		linkCon.appendChild(link);
	} else {
		link.remove();
	}
};

highlightedKeyframeEl.classList.toggle(`highlighted`);
updateProject(contentArr[keyframeSelector]);

keyframeEl.forEach((ele, index) => {
	ele.addEventListener('click', () => {
		if (moreBtn.textContent === 'collapse') {
			detailsEl.classList.add(`hidden`);
			moreBtn.textContent = 'Details'
		}
		detailsEl.classList.add(`hidden`);
		highlightedKeyframeEl.classList.toggle(`highlighted`);
		highlightedKeyframeEl = ele;
		keyframeSelector = index;
		highlightedKeyframeEl.classList.toggle(`highlighted`);
		updateProject(contentArr[keyframeSelector]);
	});
});

moreBtn.addEventListener('click', () => {
	detailsEl.classList.toggle(`hidden`);
	if (moreBtn.textContent === 'Details')
		moreBtn.textContent = 'collapse'
	else
		moreBtn.textContent = 'Details'
});
