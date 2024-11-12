#include "webManager.hpp"

webManager::webManager( std::string title, std::string mdRef, std::string mdContent ) :
	__title( title ), __mdRef( mdRef ), __mdContent( mdContent ) {
	std::ifstream	file;
	
	file.open( "projects.html" );
	if (!file.good())
		throw std::runtime_error( "projects.html was not found" );
	file.close();

	file.open( "writings.html" );
	if (!file.good())
		throw std::runtime_error( "writings.html was not found" );
	file.close();

	file.open( __mdContent + "projects/" + this->__title + ".html" );
	if (file.good()) {
		file.close();
		throw std::runtime_error( "project already exists" );
	}
}

webManager::~webManager() {

}

std::string webManager::replaceString(const std::string &original, const std::string &toReplace, std::string replacement) {
	std::string result = original;
	size_t pos = 0;

	while ((pos = result.find(toReplace, pos)) != std::string::npos) {
		result.replace(pos, toReplace.length(), replacement);
		pos += replacement.length(); 
	}
	return result;
}

// ************************************************************************************************************************************

std::string	webManager::buildProjectRef() {
	std::string		line;
	std::string		final;
	std::ifstream	mdStream;
	std::string		language;
	std::string		languages;
	std::string		templateStr;
	std::ifstream	templateStream;

	mdStream.open( this->__mdRef );
	if (!mdStream.good())
		throw std::runtime_error( "no such file" );

	templateStream.open( "project-assets/projects/ref.html" );
	if (!templateStream.good())
		throw std::runtime_error( "project template file was not found : project-assets/projects/ref.html" );

	if (!std::getline(templateStream, templateStr, '\n'))
		throw std::runtime_error( "couldn't read file : project-assets/projects/ref.html" );
	if (!std::getline(templateStream, language, '\n'))
		throw std::runtime_error( "couldn't read file : project-assets/projects/ref.html" );

	size_t	pos;
	bool	ho = false, ti = false, de = false, im = false, la = false;
	while (std::getline(mdStream, line, '\n')) {
		pos = line.find("[HOST]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "HOST", std::string(line.begin() + 6, line.end()));
			ho = true;
		}
		
		pos = line.find("[TITLE]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "TITLE", std::string(line.begin() + 7, line.end()));
			ti = true;
		}

		pos = line.find("[DESCRIPTION]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "DESCRIPTION", std::string(line.begin() + 13, line.end()));
			de = true;
		}

		pos = line.find("[IMAGE]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "IMAGE", std::string(line.begin() + 7, line.end()));
			im = true;
		}

		pos = line.find("[LANGUAGE]");
		if (pos != std::string::npos && pos == 0) {
			languages += language;
			languages = replaceString(languages, "LANGUAGE", std::string(line.begin() + 10, line.end()));
			la = true;
		}
	}

	if (!ho)
		throw std::runtime_error( this->__mdRef + " is not valid : [HOST] not specified" );
	if (!ti)
		throw std::runtime_error( this->__mdRef + " is not valid : [TITLE] not specified" );
	if (!de)
		throw std::runtime_error( this->__mdRef + " is not valid : [DESCRIPTION] not specified" );
	if (!im)
		throw std::runtime_error( this->__mdRef + " is not valid : [IMAGE] not specified" );
	if (!la)
		throw std::runtime_error( this->__mdRef + " is not valid : [LANGUAGE] not specified" );

	templateStr = replaceString(templateStr, "LANGUAGES", languages);
	templateStr = replaceString(templateStr, "LINK", "projects/" + this->__title + ".html");
	templateStr += "\n";
	mdStream.close();
	return templateStr;
}

void	webManager::addProjectRef() {
		std::ofstream				out;
		std::ifstream				file;
		std::string					line;
		std::deque<std::string>		final;

		file.open( "projects.html" );
		if (!file.good())
			throw std::runtime_error( "projects.html was not found" );
		
		bool	success = false;
		while (std::getline(file, line, '\n')) {
			final.push_back(line);
			if (line == "<!-- insert -->") {
				try {

					success = true;
					final.push_back(buildProjectRef());

				} catch (std::exception &e ) {
					std::cerr << RED << "error: " << NON << e.what() << std::endl;
				}
			}
		}
		file.close();
		if (!success)
			throw std::runtime_error( "<!-- insert --> was not found" );

		line.clear();
		std::cout << "Warning: are you sure you want to change projects.html\nall current content will be updated (Y/N) ";
		if (std::getline(std::cin, line, '\n')) {
			if (line == "y" || line == "Y") {
				out.open( "projects.html" );
				if (!out.good())
					throw std::runtime_error( "projects.html was not found" );
				for (size_t i = 0; i < final.size(); i++)
					out << final.at(i) << "\n";
			} else
				throw std::runtime_error( "abort" );
		} else
			throw std::runtime_error( "abort" );
		out.close();
}

// ************************************************************************************************************************************



std::string	webManager::buildWritingRef() {
	std::string		line;
	std::string		final;
	std::string		tag;
	std::string		tags;
	std::string		templateStr;
	std::ifstream	templateStream;
	std::ifstream	mdStream;

	mdStream.open( this->__mdRef );
	if (!mdStream.good())
		throw std::runtime_error( "no such file" );

	templateStream.open( "project-assets/writings/ref.html" );
	if (!templateStream.good())
		throw std::runtime_error( "project template file was not found : project-assets/writings/ref.html" );

	if (!std::getline(templateStream, templateStr, '\n'))
		throw std::runtime_error( "couldn't read file : project-assets/writings/ref.html" );
	if (!std::getline(templateStream, tag, '\n'))
		throw std::runtime_error( "couldn't read file : project-assets/writings/ref.html" );

	size_t	pos;
	bool	da = false, ti = false, de = false, ta = false;
	while (std::getline(mdStream, line, '\n')) {
		pos = line.find("[DATE]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "DATE", std::string(line.begin() + 6, line.end()));
			da = true;
		}
		
		pos = line.find("[TITLE]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "TITLE", std::string(line.begin() + 7, line.end()));
			ti = true;
		}

		pos = line.find("[DESCRIPTION]");
		if (pos != std::string::npos && pos == 0) {
			templateStr = replaceString(templateStr, "DESCRIPTION", std::string(line.begin() + 13, line.end()));
			de = true;
		}

		pos = line.find("[TAG]");
		if (pos != std::string::npos && pos == 0) {
			tags += tag;
			tags = replaceString(tags, "TAG", std::string(line.begin() + 5, line.end()));
			ta = false;
		}
	}
	if (!da || !ti || !de || !ta)
		throw std::runtime_error( this->__mdRef + " is not valid" );
	if (!da)
		throw std::runtime_error( this->__mdRef + " is not valid : [DATE] not specified" );
	if (!ti)
		throw std::runtime_error( this->__mdRef + " is not valid : [TITLE] not specified" );
	if (!de)
		throw std::runtime_error( this->__mdRef + " is not valid : [DESCRIPTION] not specified" );
	if (!ta)
		throw std::runtime_error( this->__mdRef + " is not valid : [TAG] not specified" );
	templateStr = replaceString(templateStr, "TAGS", tags);
	templateStr = replaceString(templateStr, "LINK", "writings/" + this->__title + ".html");
	templateStr += "\n";
	mdStream.close();
	return templateStr;
}

void	webManager::addWritingRef() {
		std::ofstream				out;
		std::ifstream				file;
		std::string					line;
		std::deque<std::string>		final;

		file.open( "writings.html" );
		if (!file.good())
			throw std::runtime_error( "writings.html was not found" );
		
		bool	success = false;
		while (std::getline(file, line, '\n')) {
			final.push_back(line);
			if (line == "<!-- insert -->") {
				try {

					success = true;
					final.push_back(buildWritingRef());

				} catch (std::exception &e ) {
					std::cerr << RED << "error: " << NON << e.what() << std::endl;
				}
			}
		}
		file.close();
		if (!success)
			throw std::runtime_error( "<!-- insert --> was not found" );

		line.clear();
		std::cout << "Warning: are you sure you want to change writings.html\nall current content will be updated (Y/N) ";
		if (std::getline(std::cin, line, '\n')) {
			if (line == "y" || line == "Y") {
				out.open( "writings.html" );
				if (!out.good())
					throw std::runtime_error( "writings.html was not found" );
				for (size_t i = 0; i < final.size(); i++)
					out << final.at(i) << "\n";
			} else
				throw std::runtime_error( "abort" );
		} else
			throw std::runtime_error( "abort" );
		out.close();
}

// ************************************************************************************************************************************

void		webManager::newProject() {
	std::ifstream	file;
	std::ofstream	newProject;

	file.open( this->__mdRef );
	if (!file.good())
		throw std::runtime_error( std::string( this->__mdRef + " was not found").c_str() );
	file.close();
	std::cout << this->__mdRef << ": OK" << std::endl;

	file.open( this->__mdContent );
	if (!file.good())
		throw std::runtime_error( std::string( this->__mdContent + " was not found").c_str() );
	file.close();
	std::cout << this->__mdContent << ": OK" << std::endl;

	newProject.open( "projects/" + this->__title + ".html" );
	if (!newProject.good())
		throw std::runtime_error( std::string( this->__title + ".html" + " couldn't be created").c_str() );
	std::cout << "projects/" << this->__title << ".html" << " was created" << std::endl;
	newProject.close();

	this->addProjectRef();
	SCVtoHTML::build( __mdContent, "projects/" + this->__title + ".html", this->__title );
}

void		webManager::newWriting() {
	std::ifstream	file;
	std::ofstream	newWriting;

	file.open( this->__mdRef );
	if (!file.good())
		throw std::runtime_error( std::string( this->__mdRef + " was not found").c_str() );
	file.close();
	std::cout << this->__mdRef << ": OK" << std::endl;

	file.open( this->__mdContent );
	if (!file.good())
		throw std::runtime_error( std::string( this->__mdContent + " was not found").c_str() );
	file.close();
	std::cout << this->__mdContent << ": OK" << std::endl;

	newWriting.open( "writings/" + this->__title + ".html" );
	if (!newWriting.good())
		throw std::runtime_error( std::string( this->__title + ".html" + " couldn't be created").c_str() );
	std::cout << "writings/" << this->__title << ".html" << " was created" << std::endl;
	newWriting.close();

	this->addWritingRef();
	SCVtoHTML::build( __mdContent, "writings/" + this->__title + ".html", this->__title );
}
