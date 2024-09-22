# include <iostream>
# include <fstream>
# include <iomanip>
# include <map>

# define RED	"\033[1;31m"
# define DEF	"\033[0m"


void	textToWeb( const char *fileName )
{
		std::ifstream	file;

		file.open( fileName );
		if (file.is_open())
		{
			std::cout << "input file opened" << std::endl;
			std::ofstream	res( "res.html" );

			if (res.is_open())
			{
				std::cout << "output file opened" << std::endl;
				std::string	line;
				size_t		pos;

				std::map< std::string, std::string >	elements;
				elements["#Date: "] = "<div id=\"date-created\">\n\t";
				elements["#Title: "] = "<div id=\"title\">\n\t";
				elements["#Description: "] = "<div id=\"article-description\">\n\t";
				elements["# "] = "<div class=\"title1\">\n\t";
				elements["## "] = "<div class=\"title2\">\n\t";
				elements["### "] = "<div class=\"title3\">\n\t";
				elements["para"] = "<div class=\"para\">\n\t";
				elements["||| "] = "<div class=\"quote\">\n\t";
				elements["``` "] = "<div class=\"code\">\n\t";
				elements[". "] = "<li class=\"dot-list\">\n\t";

				while (std::getline(file, line, '\n'))
				{
					int			para = 0;
					std::string	ele;

					if (line.empty())
						continue ;

					pos = line.find("#Date: ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Date" << std::endl;
						ele = elements["#Date: "] + line.substr(7) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("#Title: ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Title" << std::endl;
						ele = elements["#Title: "] + line.substr(8) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("#Description: ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Description" << std::endl;
						ele = elements["#Description: "] + line.substr(14) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("# ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Title 1" << std::endl;
						ele = elements["# "] + line.substr(2) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("## ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Title 2" << std::endl;
						ele = elements["## "] + line.substr(3) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("### ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Title 3" << std::endl;
						ele = elements["### "] + line.substr(4) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("``` ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Code" << std::endl;
						ele = elements["``` "] + line.substr(4) + "\n</div>\n";
						para = 1;
					}

					pos = line.find("||| ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Quote" << std::endl;
						ele = elements["||| "] + line.substr(4) + "\n</div>\n";
						para = 1;
					}

					pos = line.find(". ");
					if (pos != std::string::npos && pos == 0)
					{
						std::cout << "Quote" << std::endl;
						ele = elements[". "] + line.substr(2) + "\n</li>\n";
						para = 1;
					}

					if (para == 0)
					{
						std::cout << "paragraph" << std::endl;
						ele = elements["para"] + line + "\n</div>\n";
					}

					res << ele;
					line.clear();
				}
				res.close();
			}
			else
			{
				file.close();
				throw std::runtime_error( "couldn't open output file" );
			}
			file.close();
		}
		else
			throw std::runtime_error( "couldn't open input file" );
}

bool	isOperator( char c )
{
	return c == ';' || c == '(' || c == ')' || c == '}' \
			|| c == '{' || c == '=' || c == '+' || c == '-' \
			|| c == '*' || c == '|' || c == '&';
}

int main( int ac, char **av )
{

	try
	{
		if (ac != 3 || !*(*av + 1) || !*(*av + 2))
			throw std::runtime_error( "invalid arguments" );
		if (std::string(*(av + 1)) == "text")
			textToWeb(*(av + 2) );
	}
	catch ( std::exception &e )
	{
		std::cerr << RED << "error: " << DEF << e.what() << std::endl;
	}

	return 0;
}
