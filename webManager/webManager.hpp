#ifndef WEBMANAGER_HPP
# define WEBMANAGER_HPP

# include <deque>
# include "SCVtoHTML.hpp"

# define PROJECT	"PROJECT"
# define WRITING	"WRITING"
# define EXIT		"EXIT"

class webManager
{
	private :
		std::string		__title;
		std::string		__mdRef;
		std::string		__mdContent;

	public:
		webManager( std::string title, std::string mdRef, std::string mdContent );
		~webManager();

		std::string replaceString(const std::string &original, const std::string &toReplace, std::string replacement);

		std::string	buildProjectRef();
		void		addProjectRef();
		void		newProject();

		std::string	buildWritingRef();
		void		addWritingRef();
		void		newWriting();
};

#endif
