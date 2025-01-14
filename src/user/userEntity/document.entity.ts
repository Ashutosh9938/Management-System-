import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { User } from '../authentication/entities/authentication.entity';

@Entity({ name: 'userDocuments' })
export class UserDocuments {
  map(arg0: (doc: any) => { documentName: any; documentFile: any; }): any {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn('uuid')
  documentId: UUID;

  @Column({ type: 'text', nullable: false })
  documentName: string;

  @Column({type: 'text', nullable: true })
  documentFile: string;
  
  @Column({ type: 'boolean', nullable: true, default: true })
  isActivated: boolean;
  

  @ManyToOne(() => User, (user) => user.document, { nullable: true,onDelete: 'CASCADE',onUpdate:'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
