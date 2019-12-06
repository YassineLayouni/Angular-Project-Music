import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../Classes/Artist';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.css']
})
export class UpdateArtistComponent implements OnInit {
  refArtist : number;
  artist : Artist;
  updateForm : FormGroup;
  findReference(ref:number)
  {
    if(this.service.getArtist(ref)!=null)
    {
      return true;
    }
    return false;
  }
  onUpdateArtist()
  {
    if(this.ref == undefined)this.ref = this.refArtist;
    if(this.name == undefined)this.ref = this.refArtist;
    if(this.ref == undefined)this.ref = this.refArtist;
    alert(this.service.updateArtist(this.refArtist,this.ref,this.name,"../assets/"+this.photo,"../assets/"+this.profilePhoto,"../assets/"+this.backgroundPhoto));
  }
  constructor(private service:ListService,private activatedRoute:ActivatedRoute,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.refArtist = this.activatedRoute.snapshot.params['idArtist'];
    this.artist = this.service.getArtist(this.refArtist);
    this.updateForm = this.formBuilder.group(
      {ref:[''],
       name:[''],
       photo:[''],
       profilePhoto:[''],
       backgroundPhoto:['']
      }
    )
  }
  public get ref(){
    return this.updateForm.get('ref').value; 
  }
  public set ref(ref:number)
  {
    this.ref = ref;
  }
  public get name(){
    return this.updateForm.get('name').value;
  }
  public set name(name:string)
  {
    this.name = name;
  }
  public get photo(){
    return this.updateForm.get('photo').value.substr(12);
  }
  public set photo(photo:string){
    this.photo = photo.substr(12);
  }
  public set profilePhoto(profilePhoto:string){
    this.profilePhoto = profilePhoto.substr(12);
  }
  public get profilePhoto(){
    return this.updateForm.get('profilePhoto').value.substr(12);
  }
  public get backgroundPhoto(){
    return this.updateForm.get('backgroundPhoto').value.substr(12);
  }
  public get backgroundPhoto(){
    return this.updateForm.get('backgroundPhoto').value.substr(12);
  }

}
