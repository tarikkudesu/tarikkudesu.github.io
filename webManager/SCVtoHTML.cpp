#include "SCVtoHTML.hpp"

SCVtoHTML::SCVtoHTML( std::string file, std::string outfile, std::string title ) : __file( file ), __outfile( outfile ), __title( title ) {
	__in.open( __file );
	if (__in.is_open()) {
		__out.open( __outfile );
		if (__out.is_open()) {
			__elements[PARA] = "<p class=\"para\">CONTENT</p>";
			__elements[TITLE] = "<div class=\"title\">CONTENT</div>";
			__elements[TITLE1] = "<div class=\"title-1\">CONTENT</div>";
			__elements[TITLE2] = "<div class=\"title-2\">CONTENT</div>";
			__elements[TITLE3] = "<div class=\"title-3\">CONTENT</div>";
			__elements[QUOTE] = "<div class=\"quote\">CONTENT</div>";
			__elements[LIST] = "<ul class=\"list\">";
			__elements[CODE] = "<div class=\"code\">CONTENT</div>";
			__elements[LISTITEM] = "<li class=\"list-item\">CONTENT</li>";
			__elements[IMAGE] = "<img src=\"CONTENT\" alt=\"\" class=\"image\">";
		} else {
			__in.close();
			throw std::runtime_error( "couldn't open output file" );
		}
	} else {
		throw std::runtime_error( "couldn't open input file" );
	}
}

SCVtoHTML::~SCVtoHTML() {
	__in.close();
	__out.close();
}

void	SCVtoHTML::replace(std::string	&input, std::string const &s1, std::string const &s2) {
	if (input.empty())
		return ;
	std::string::iterator	iter;
	size_t					pos;
	pos = input.find(s1);
	if (pos == std::string::npos)
		return ;
	iter = input.begin() + pos;
	input.erase(iter, iter + s1.length());
	input.insert(pos, s2);
}

void	SCVtoHTML::buildHTMLFile( std::deque<std::string> &final ) {
	std::ifstream	file;
	std::string		line;

	std::string	type(__outfile.begin(), __outfile.begin() + 8);
	if (type == "writings") {
		file.open( "project-assets/writings/template.html" );
		if (!file.good())
			throw std::runtime_error( "project-assets/writings/template.html was not found" );
	} else if (type == "projects") {
		file.open( "project-assets/projects/template.html" );
		if (!file.good())
			throw std::runtime_error( "project-assets/projects/template.html was not found" );
	} else {
			size_t	pos;
			for (size_t t = 0; t < final.size(); t++) {
				pos = final.at(t).find("<li class=\"list-item\">");
				if (pos != std::string::npos && pos == 0) {
					__out << this->__elements[LIST] << "\n";
					for (; t < final.size(); t++) {
						pos = final.at(t).find("<li class=\"list-item\">");
						if (pos == std::string::npos)
							break ;
						if (t < final.size()) {
							__out << final.at(t) << "\n";
							std::cout << "[ writing ] : " << final.at(t) << std::endl;
						}
					}
					__out << "</ul>\n";
					std::cout << "[ writing ] : </ul>\n" << std::endl;
					if (t < final.size())
						__out << final.at(t) << "\n";
					if (t < final.size())
						std::cout << "[ writing ] : " << final.at(t) << std::endl;
				} else {
					if (t < final.size()) {
						__out << final.at(t) << "\n";
						std::cout << "[ writing ] : " << final.at(t) << std::endl;
					}
				}
			}
	}

	while (std::getline(file, line, '\n')) {
		size_t	pos;
		pos = line.find("PAGETITLE");
		if (pos != std::string::npos)
			replace(line, "PAGETITLE", this->__title);\
		__out << line << "\n";
		if (line == "<!-- insert -->") {
			__out << "\n";
			for (size_t t = 0; t < final.size(); t++) {
				pos = final.at(t).find("<li class=\"list-item\">");
				if (pos != std::string::npos && pos == 0) {
					__out << this->__elements[LIST] << "\n";
					for (; t < final.size(); t++) {
						pos = final.at(t).find("<li class=\"list-item\">");
						if (pos == std::string::npos)
							break ;
						__out << final.at(t) << "\n";
						std::cout << "[ writing ] : " << final.at(t) << std::endl;
					}
					__out << "</ul>\n";
					std::cout << "[ writing ] : </ul>\n" << std::endl;
					if (t < final.size())
						__out << final.at(t) << "\n";
					if (t < final.size())
						std::cout << "[ writing ] : " << final.at(t) << std::endl;
				} else {
					if (t < final.size()) {
						__out << final.at(t) << "\n";
						std::cout << "[ writing ] : " << final.at(t) << std::endl;
					}
				}
			}
		}
	}
	file.close();
}

void	SCVtoHTML::convertSCVtoHTML( void ) {
	std::deque<std::string>		final;
	std::string					line;
	std::string					listStr;
	std::string					codeStr;
	std::string					quoteStr;
	bool						quote = false;
	bool						code = false;
	size_t						pos;

	if (std::getline(this->__in, line, '\n')) {
		pos = line.find("# ");
		if (pos != std::string::npos && pos == 0) {
			std::string	holder(this->__elements[TITLE]);
			std::string	content = std::string(line.begin() + 2, line.end());
			replace(holder, "CONTENT", content);
			final.push_back(holder);
		}
	} else 
		throw (std::runtime_error("Empty file"));


	while (std::getline(this->__in, line, '\n')) {

		std::cout << "[ retreiving ] : " << line << std::endl;

		pos = line.find(LISTITEM);
		if (pos != std::string::npos && pos == 0) {
			std::string	holder(this->__elements[LISTITEM]);
			std::string	content = SCVtoHTML::process_line( std::string(line.begin() + 2, line.end()) );
			replace(holder, "CONTENT", content);
			final.push_back(holder);
			continue ;
		}

		if (line.empty())
			continue ;

		pos = line.find(TITLE1);
		if (pos != std::string::npos && pos == 0) {
			std::string	holder(this->__elements[TITLE1]);
			std::string	content = SCVtoHTML::process_line( std::string(line.begin() + 2, line.end()) );
			replace(holder, "CONTENT", content);
			final.push_back(holder);
			continue ;
		}

		pos = line.find(TITLE2);
		if (pos != std::string::npos && pos == 0) {
			std::string	holder(this->__elements[TITLE2]);
			std::string	content = SCVtoHTML::process_line( std::string(line.begin() + 3, line.end()) );
			replace(holder, "CONTENT", content);
			final.push_back(holder);
			continue ;
		}

		pos = line.find(TITLE3);
		if (pos != std::string::npos && pos == 0) {
			std::string	holder(this->__elements[TITLE3]);
			std::string	content = SCVtoHTML::process_line( std::string(line.begin() + 4, line.end()) );
			replace(holder, "CONTENT", content);
			final.push_back(holder);
			continue ;
		}

		pos = line.find(QUOTE);
		if (pos != std::string::npos && pos == 0) {
			if (line == "> ") {
				std::string	holder(this->__elements[QUOTE]);
				std::string	content = SCVtoHTML::process_line( quoteStr );
				replace(holder, "CONTENT", content);
				final.push_back(holder);
				quoteStr.clear();
				quote = false;
			} else {
				if (pos != std::string::npos && pos == 0) {
					quoteStr = std::string(line.begin() + 2, line.end());
				} else {
					quoteStr += " ";
					quoteStr += line;
				}
				quote = true;
			}
			continue ;
		}

		pos = line.find(CODE);
		if (pos != std::string::npos && pos == 0) {
			if (code == false) {
				code = true;
			} else {
				std::string	holder(this->__elements[CODE]);
				std::string	content = SCVtoHTML::process_line( codeStr );
				replace(holder, "CONTENT", content);
				final.push_back(holder);
				codeStr.clear();
				code = false;
			}
			continue ;
		}
		if (code == true && line != "```") {
			codeStr += "<div>" + line + "</div>\n";
			continue ;
		}

		pos = line.find(IMAGE);
		if (pos != std::string::npos && pos == 0) {
			pos = line.find("](");
			if (pos == std::string::npos)
				continue ;
			std::string	holder(this->__elements[IMAGE]);
			std::string	content = "../project-assets/img/" + std::string(line.begin() + 2, line.begin() + pos);
			replace(holder, "CONTENT", content);
			final.push_back(holder);
			continue ;
		}

		if (line == "<aside>") {
			final.push_back("<div class=\"aside\">");
			continue ;
		} else if (line == "</aside>") {
			final.push_back("</div>");
			continue ;
		}

		if (islower(line.at(0)))
			line.at(0) -= 32;
		std::string	holder(this->__elements[PARA]);
		std::string	content = SCVtoHTML::process_line(std::string(line.begin(), line.end()));
		replace(holder, "CONTENT", content);
		final.push_back(holder);
		line.clear();
	}

	buildHTMLFile( final );
}

void	SCVtoHTML::snipet( std::string &line ) {
	size_t	pos1;
	size_t	pos2;
	while (true) {
		pos1 = line.find("`");
		if (pos1 == std::string::npos)
			return ;
		std::string	tmp(line.begin() + pos1 + 1, line.end());
		pos2 = tmp.find("`");
		if (pos2 == std::string::npos)
			return ;
		std::string	sub(line.begin() + pos1, line.begin() + pos1 + pos2 + 2);
		std::string snipet = "<span class=\"code-snipet\">" + std::string(sub.begin() + 1, sub.end() - 1) + "</span>";
		replace(line, sub, snipet);
	}
}

void	SCVtoHTML::boldItalic( std::string &line ) {
	size_t	pos1;
	size_t	pos2;
	while (true) {
		pos1 = line.find("***");
		if (pos1 == std::string::npos)
			return ;
		std::string	tmp(line.begin() + pos1 + 3, line.end());
		pos2 = tmp.find("***");
		if (pos2 == std::string::npos)
			return ;
		std::string	sub(line.begin() + pos1, line.begin() + pos1 + pos2 + 6);
		std::string snipet = "<span class=\"bold\"><span class=\"italic\">" + std::string(sub.begin() + 3, sub.end() - 3) + "</span></span>";
		replace(line, sub, snipet);
	}
}

void	SCVtoHTML::bold( std::string &line ) {
	size_t	pos1;
	size_t	pos2;
	while (true) {
		pos1 = line.find("**");
		if (pos1 == std::string::npos)
			return ;
		std::string	tmp(line.begin() + pos1 + 2, line.end());
		pos2 = tmp.find("**");
		if (pos2 == std::string::npos)
			return ;
		std::string	sub(line.begin() + pos1, line.begin() + pos1 + pos2 + 4);
		std::string snipet = "<span class=\"bold\">" + std::string(sub.begin() + 2, sub.end() - 2) + "</span>";
		replace(line, sub, snipet);
	}
}

void	SCVtoHTML::italic( std::string &line ) {
	size_t	pos1;
	size_t	pos2;
	while (true) {
		pos1 = line.find("*");
		if (pos1 == std::string::npos)
			return ;
		std::string	tmp(line.begin() + pos1 + 1, line.end());
		pos2 = tmp.find("*");
		if (pos2 == std::string::npos)
			return ;
		std::string	sub(line.begin() + pos1, line.begin() + pos1 + pos2 + 2);
		std::string snipet = "<span class=\"italic\">" + std::string(sub.begin() + 1, sub.end() - 1) + "</span>";
		replace(line, sub, snipet);
	}
}

std::string	SCVtoHTML::process_line( std::string line ) {
	snipet(line);
	boldItalic(line);
	bold(line);
	italic(line);
	return line;
}

void	SCVtoHTML::build( std::string file, std::string outfile, std::string title ) {
	try {
		SCVtoHTML	builder( file, outfile, title );

		builder.convertSCVtoHTML();
	} catch ( std::exception &e ) {
		std::cerr << RED << "error: " << NON << e.what() << std::endl;
	}
}
