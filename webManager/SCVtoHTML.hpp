#ifndef SCVtoHTML_HPP
# define SCVtoHTML_HPP

# include <iostream>
# include <fstream>
# include <vector>
# include <map>

# define RED "\e[1;31m"
# define DEF "\e[0;39m"
# define YEL "\e[1;33m"
# define NON "\e[0m"

# define CODE		"```"
# define PARA		"para"
# define LIST		"list"
# define QUOTE		"> "
# define TITLE		"T "
# define IMAGE		"!["
# define TITLE1		"# "
# define TITLE2		"## "
# define TITLE3		"### "
# define LISTITEM	"- "

class SCVtoHTML
{
	private :
		std::ifstream						__in;
		std::ofstream						__out;
		std::string							__file;
		std::string							__outfile;
		std::string							__title;
		std::map<std::string, std::string>	__elements;
		SCVtoHTML( std::string file, std::string outfile, std::string title );
		~SCVtoHTML();

		static void			replace(std::string	&input, std::string const &s1, std::string const &s2);
		static void			boldItalic( std::string &line );
		static void			snipet( std::string &line );
		static void			italic( std::string &line );
		static void			bold( std::string &line );
		static std::string	process_line( std::string line );

		void				buildHTMLFile( std::deque<std::string> &final );
		void				convertSCVtoHTML( void );

	public:
		static void			build( std::string file, std::string outfile, std::string title );
};

#endif
