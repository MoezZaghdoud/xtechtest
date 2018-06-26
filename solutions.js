	function nbChar(chaine,lettre) 
		{
		  var nb = 0;
		  chaine = chaine.split("");
		  for(var i in chaine)
		    nb += chaine[i] == lettre;
		  return nb;
		}
	function f1(a,b)
		{
			var nb_remove=0;
			var alphabet = 'abcdefghijklmnopqrstuvwxyz';	
			for(var i= 0; i < alphabet.length; i++)
			{	
				var w = alphabet[i];
				var x = nbChar(a,w);
				var y = nbChar(b,w);
				if( x > y )
				{
					nb_remove += x-y;
				}
				else
				{
					nb_remove +=y-x;
				}
			}
			document.write("we should remove "+nb_remove+" caracters.");
		}
	function f2(a,b)
		{
			var array = new Array(0);
			for(var i = 0; i<b.length; i++)
			{	
				var nb_occ =0;
				for(var j = 0; j<a.length; j++)
				{
					if(b[i] == a[j])
					{
						nb_occ++;
					}
				}
				array.push(nb_occ);
			}
			document.write("["+array+"]");
		}
	function f3(a)
		{
			var dot = ".";
			var nb_parts = 0;
			var regex = /^[a-zA-Z0-9-_.']/;
			var test = regex.test(a);
			document.write("resultat du test"+ test);
			if(regex.test(a))
			{
				nb_parts = nbChar(a,dot)+1;
			}
			document.write("le nombre est:"+nb_parts);
		}