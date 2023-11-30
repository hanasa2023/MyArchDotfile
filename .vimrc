syntax on
set number
set relativenumber

set tabstop=4
set softtabstop=4
set shiftwidth=4

noremap J 5j
noremap K 5k

noremap = nzz
noremap - Nzz
noremap <LEADER><CR> :nohlsearch<CR>
noremap <LEADER>l <C-w>l
noremap <LEADER>j <C-w>h

inoremap jj <ESC>

map s :<nop><CR>
map S :w<CR>
map Q :q<CR>
map R :source $MYVIMRC<CR>
