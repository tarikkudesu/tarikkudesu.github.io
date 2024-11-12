
# include "webManager.hpp"

void	build( std::string option, std::string title, std::string file1, std::string file2 ) {
	webManager	web( title, file1, file2 );

	if (option == "-c")
		SCVtoHTML::build( file1, file2, title );
	else if (option == "-pn")
		web.newProject();
	else if (option == "-wn")
		web.newWriting();
	else {
		std::cout << "\nUsage:	./manager [OPTIONS] TITLE [PATH] [PATH]\n" << std::endl;
		std::cout << "\nOptions:\n" << std::endl;
		std::cout << "\t-pn, --project --name	add a new project and give it a name" << std::endl;
		std::cout << "\t-wn, --writing --name	add a new writing and give it a name" << std::endl;
		std::cout << "\t-c, --convert			convert an md to HTML\n" << std::endl;
	}
}

int	main( int ac , char **av ) {
	try {

		switch (ac) {
			case 2:
				if (std::string( *(av + 1) ) == "--help")
					std::cout << "\nUsage:	./manager [OPTIONS] TITLE [PATH] [PATH]\n" << std::endl;
					std::cout << "\nOptions:\n" << std::endl;
					std::cout << "\t-pn, --project --name	add a new project and give it a name" << std::endl;
					std::cout << "\t-wn, --writing --name	add a new writing and give it a name" << std::endl;
					std::cout << "\t-c, --convert			convert an md to HTML\n" << std::endl;

				break ;
			case 5:
				build( *(av + 1), *(av + 2), *(av + 3), *(av + 4) );
				break ;
			default:
				std::cout << "\nUsage:	./manager [OPTIONS] TITLE [PATH] [PATH]\n" << std::endl;
				std::cout << "\nOptions:\n" << std::endl;
				std::cout << "\t-pn, --project --name	add a new project and give it a name" << std::endl;
				std::cout << "\t-wn, --writing --name	add a new writing and give it a name" << std::endl;
				std::cout << "\t-c,  --convert			convert an md to HTML\n" << std::endl;
		}

	} catch (std::exception &e ) {
		std::cerr << RED << "error: " << NON << e.what() << std::endl;
	}
}
