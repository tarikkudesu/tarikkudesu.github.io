SRC		=	./webManager/main.cpp ./webManager/SCVtoHTML.cpp ./webManager/webManager.cpp 
OBJ		=	$(SRC:.cpp=.o)
NAME	=	manager

all: $(NAME)

$(NAME): $(OBJ)
	@c++ -Wall -Wextra -Werror -std=c++98 $(OBJ) -o $(NAME)

%.o: %.cpp ./webManager/SCVtoHTML.hpp ./webManager/webManager.hpp 
	@c++ -Wall -Wextra -Werror -std=c++98 -c $< -o $@

clean:
	@rm -f $(OBJ)

fclean: clean
	@rm -f $(NAME)

re: fclean all

.PHONY: clean
